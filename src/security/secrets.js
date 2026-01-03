/**
 * Secrets Detection Utility
 * Helps prevent accidental exposure of API keys, tokens, and other sensitive data
 * Run during build and in CI/CD pipeline
 */

/**
 * Common secret patterns that should never be in code
 */
const SECRET_PATTERNS = [
  // AWS
  { pattern: /aws_access_key_id\s*[:=]/gi, name: 'AWS Access Key' },
  { pattern: /aws_secret_access_key\s*[:=]/gi, name: 'AWS Secret Key' },
  { pattern: /AKIA[0-9A-Z]{16}/g, name: 'AWS Access Key ID' },

  // API Keys
  { pattern: /api[_-]?key\s*[:=]/gi, name: 'API Key' },
  { pattern: /api[_-]?secret\s*[:=]/gi, name: 'API Secret' },

  // GitHub
  { pattern: /github[_-]?token\s*[:=]/gi, name: 'GitHub Token' },
  { pattern: /gh[ps]_[A-Za-z0-9_]{36,255}/g, name: 'GitHub Token' },

  // Private Keys
  { pattern: /-----BEGIN RSA PRIVATE KEY-----/gi, name: 'RSA Private Key' },
  { pattern: /-----BEGIN PRIVATE KEY-----/gi, name: 'Private Key' },
  { pattern: /private[_-]?key\s*[:=]/gi, name: 'Private Key' },

  // Passwords and Secrets
  { pattern: /password\s*[:=]\s*['\"][^'\"]*['\"]/gi, name: 'Password' },
  { pattern: /secret\s*[:=]\s*['\"][^'\"]*['\"]/gi, name: 'Secret' },
  { pattern: /token\s*[:=]\s*['\"][^'\"]*['\"]/gi, name: 'Token' },

  // Database URLs
  { pattern: /database[_-]?url\s*[:=]/gi, name: 'Database URL' },
  { pattern: /mongodb\+srv:\/\/[^'\"]/g, name: 'MongoDB Connection String' },

  // Firebase
  { pattern: /firebase[_-]?key\s*[:=]/gi, name: 'Firebase Key' },

  // Stripe
  { pattern: /sk_test_[A-Za-z0-9]{20,}/g, name: 'Stripe Test Key' },
  { pattern: /sk_live_[A-Za-z0-9]{20,}/g, name: 'Stripe Live Key' },

  // JWT Tokens
  { pattern: /eyJhbGciOiJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g, name: 'JWT Token' },

  // OAuth
  { pattern: /oauth[_-]?token\s*[:=]/gi, name: 'OAuth Token' },

  // SSH Keys
  { pattern: /ssh-rsa\s+[A-Za-z0-9+\/=]+/g, name: 'SSH Public Key' },
];

/**
 * Files and directories that commonly contain secrets
 */
const SUSPICIOUS_FILES = [
  '.env',
  '.env.local',
  '.env.development.local',
  '.env.test.local',
  '.env.production.local',
  '.aws/credentials',
  '.ssh/id_rsa',
  '.ssh/id_ecdsa',
  'config.json',
  'secrets.json',
  'credentials.json',
  'private.key',
  'id_rsa',
  'id_ecdsa',
];

/**
 * Check if content contains potential secrets
 * @param {string} content - Content to scan
 * @returns {array} - Array of found secrets with details
 */
export const scanForSecrets = (content) => {
  if (!content || typeof content !== 'string') {
    return [];
  }

  const found = [];

  SECRET_PATTERNS.forEach(({ pattern, name }) => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach(match => {
        found.push({
          type: name,
          match: match.substring(0, 50), // Truncate for safety
          line: getLineNumber(content, match),
        });
      });
    }
  });

  return found;
};

/**
 * Scan file for secrets (development use)
 * @param {string} filename - File path to check
 * @param {string} content - File content to scan
 * @returns {boolean} - True if suspicious file or content found
 */
export const isSuspiciousFile = (filename) => {
  if (!filename || typeof filename !== 'string') {
    return false;
  }

  // Check if filename matches suspicious patterns
  const basename = filename.split('/').pop().toLowerCase();
  return SUSPICIOUS_FILES.some(suspicious =>
    basename === suspicious || basename.includes(suspicious)
  );
};

/**
 * Get line number of match in content
 * @param {string} content - Full content
 * @param {string} match - Text to find
 * @returns {number} - Line number (1-indexed)
 */
const getLineNumber = (content, match) => {
  if (!content.includes(match)) {
    return -1;
  }

  const index = content.indexOf(match);
  return content.substring(0, index).split('\n').length;
};

/**
 * Validate build output for exposed secrets
 * Run before deployment
 * @param {string} buildContent - Built/bundled code content
 * @returns {object} - Validation result with details
 */
export const validateBuildForSecrets = (buildContent) => {
  const secrets = scanForSecrets(buildContent);

  return {
    isSecure: secrets.length === 0,
    secretsFound: secrets.length,
    details: secrets,
    message: secrets.length > 0
      ? `🚨 SECURITY ERROR: Found ${secrets.length} potential secrets in build!`
      : '✅ No secrets detected in build',
  };
};

/**
 * Check environment variables for secrets
 * @param {object} env - Environment object to check
 * @returns {array} - Array of potentially exposed secrets
 */
export const checkEnvironmentSecrets = (env = process.env) => {
  const exposed = [];

  Object.entries(env).forEach(([key, value]) => {
    if (!value || typeof value !== 'string') {
      return;
    }

    // Skip REACT_APP_ variables (they're meant to be public)
    if (key.startsWith('REACT_APP_')) {
      return;
    }

    const secrets = scanForSecrets(value);
    if (secrets.length > 0) {
      exposed.push({
        variable: key,
        secretCount: secrets.length,
        types: [...new Set(secrets.map(s => s.type))],
      });
    }
  });

  return exposed;
};

/**
 * Log security scan results
 * @param {object} result - Validation result from validateBuildForSecrets
 */
export const logSecurityScanResult = (result) => {
  if (result.isSecure) {
    console.log('✅ ' + result.message);
  } else {
    console.error('🚨 ' + result.message);
    result.details.forEach(detail => {
      console.error(`  - ${detail.type} at line ${detail.line}: ${detail.match}`);
    });
  }
};

/**
 * Generate pre-commit hook for git
 * Prevents committing files with secrets
 * @returns {string} - Shell script for pre-commit hook
 */
export const generatePreCommitHook = () => {
  return `#!/bin/sh
# Pre-commit hook to prevent secrets from being committed

STAGED_FILES=$(git diff --cached --name-only)

echo "🔍 Scanning staged files for secrets..."

for file in $STAGED_FILES; do
  # Skip certain file types
  if [[ $file == *.lock ]] || [[ $file == node_modules/* ]]; then
    continue
  fi

  # Check file against secret patterns
  if git diff --cached "$file" | grep -E '(api[_-]?key|password|secret|token|private[_-]?key|aws_secret)' -i > /dev/null; then
    echo "❌ BLOCKED: Potential secret found in $file"
    exit 1
  fi
done

echo "✅ No secrets detected"
exit 0
`;
};

/**
 * Validate environment at startup
 * Run this in app initialization
 */
export const validateEnvironmentAtStartup = () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const exposed = checkEnvironmentSecrets();
  if (exposed.length > 0) {
    console.warn('⚠️ SECURITY WARNING: Found secrets in environment variables:');
    exposed.forEach(item => {
      console.warn(`  - ${item.variable}: ${item.types.join(', ')}`);
    });
  }
};

export default {
  scanForSecrets,
  isSuspiciousFile,
  validateBuildForSecrets,
  checkEnvironmentSecrets,
  logSecurityScanResult,
  generatePreCommitHook,
  validateEnvironmentAtStartup,
};
