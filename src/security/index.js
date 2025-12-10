/**
 * Security Module
 * Central export point for all security utilities
 */

export { escapeHtml, stripHtmlTags, sanitizeUrl, sanitizeText, sanitizeUserInput, trustHtml, sanitizeMarkdown, containsPotentialXss } from './sanitize';
export { SECURITY_HEADERS, SECURITY_META_TAGS, applySecurityHeaders, getCspConfig, getAllSecurityHeaders, validateSecurityHeaders, logSecurityConfig } from './headers';
export { scanForSecrets, isSuspiciousFile, validateBuildForSecrets, checkEnvironmentSecrets, logSecurityScanResult, generatePreCommitHook, validateEnvironmentAtStartup } from './secrets';

/**
 * Initialize all security features
 * Call this in your main app component
 */
export const initializeSecurity = () => {
  const { applySecurityHeaders, validateSecurityHeaders, logSecurityConfig, validateEnvironmentAtStartup } = require('./headers');
  const { validateEnvironmentAtStartup: validateEnv } = require('./secrets');

  if (process.env.NODE_ENV === 'development') {
    console.log('🔒 Initializing security features...');
  }

  // Apply security headers
  applySecurityHeaders();

  // Validate headers are set
  validateSecurityHeaders();

  // Log security config
  logSecurityConfig();

  // Check environment
  validateEnv();

  if (process.env.NODE_ENV === 'development') {
    console.log('✅ Security features initialized');
  }
};

export default {
  initializeSecurity,
};
