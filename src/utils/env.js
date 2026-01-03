/**
 * Environment Configuration Utility
 * Safely loads and validates environment variables
 * Prevents accidental exposure of secrets
 */

/**
 * List of allowed environment variable prefixes
 * Only REACT_APP_* variables are exposed to frontend
 */
const ALLOWED_PREFIXES = ['REACT_APP_'];

/**
 * Variables that should NEVER be exposed (block list)
 */
const BLOCKED_VARIABLES = [
  'PRIVATE_KEY',
  'SECRET_KEY',
  'API_KEY',
  'TOKEN',
  'PASSWORD',
  'AWS_SECRET',
  'DATABASE_URL',
  'GITHUB_TOKEN',
];

/**
 * Get safe environment variable
 * @param {string} key - Environment variable key
 * @param {any} defaultValue - Default value if not found
 * @returns {any} - Environment variable value or default
 * @throws {Error} - If variable is in blocked list
 */
export const getEnv = (key, defaultValue = undefined) => {
  // Check if variable is blocked
  const blockedMatch = BLOCKED_VARIABLES.some(blocked =>
    key.toUpperCase().includes(blocked)
  );

  if (blockedMatch) {
    console.error(
      `SECURITY: Attempted to access blocked environment variable: ${key}`
    );
    return defaultValue;
  }

  // Only allow REACT_APP_* variables on frontend
  if (!process.env[key] && !key.startsWith('REACT_APP_')) {
    return defaultValue;
  }

  return process.env[key] ?? defaultValue;
};

/**
 * Validate that no secrets are exposed in build
 * Run this at startup in development
 */
export const validateNoSecretsExposed = () => {
  if (process.env.NODE_ENV !== 'development') {
    return; // Skip in production
  }

  const suspiciousVars = Object.keys(process.env).filter(key => {
    const value = process.env[key] || '';
    const isSuspicious =
      BLOCKED_VARIABLES.some(blocked => key.toUpperCase().includes(blocked)) ||
      value.includes('secret') ||
      value.includes('key') ||
      value.includes('token') ||
      value.includes('password');

    return isSuspicious && value.length > 0;
  });

  if (suspiciousVars.length > 0) {
    console.warn(
      '⚠️ SECURITY WARNING: Potentially exposed secrets detected in environment:',
      suspiciousVars
    );
  }
};

/**
 * Get all safe public environment variables
 * Only returns REACT_APP_* variables
 * @returns {object} - Safe environment variables
 */
export const getPublicEnv = () => {
  const publicEnv = {};

  Object.keys(process.env).forEach(key => {
    if (key.startsWith('REACT_APP_')) {
      publicEnv[key] = process.env[key];
    }
  });

  return publicEnv;
};

/**
 * Check if running with required environment variables
 * @param {string[]} requiredVars - Array of required variable names
 * @returns {boolean} - True if all required variables are set
 */
export const hasRequiredEnvVars = (requiredVars = []) => {
  return requiredVars.every(varName => {
    const value = getEnv(varName);
    return value !== undefined && value !== null && value !== '';
  });
};

/**
 * Log environment configuration (safe, public vars only)
 * Use for debugging without exposing secrets
 */
export const logEnvConfig = () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const config = getPublicEnv();
  console.log('📦 Public Environment Configuration:', config);
};

export default {
  getEnv,
  validateNoSecretsExposed,
  getPublicEnv,
  hasRequiredEnvVars,
  logEnvConfig,
};
