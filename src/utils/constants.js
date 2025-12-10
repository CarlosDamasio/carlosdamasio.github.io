/**
 * Application Constants
 * Non-secret configuration values used throughout the app
 */

export const APP_CONFIG = {
  SITE_NAME: process.env.REACT_APP_SITE_NAME || 'Carlos Damasio Portfolio',
  SITE_URL: process.env.REACT_APP_SITE_URL || 'https://www.carlosdamasio.com',
  GITHUB_URL: process.env.REACT_APP_GITHUB_URL || 'https://github.com/CarlosDamasio',
  LINKEDIN_URL: 'https://linkedin.com/in/carlosdamasio',
};

export const FEATURE_FLAGS = {
  ENABLE_BLOG: process.env.REACT_APP_ENABLE_BLOG === 'true',
  ENABLE_CONTACT_FORM: process.env.REACT_APP_ENABLE_CONTACT_FORM === 'true',
  DEBUG_MODE: process.env.REACT_APP_DEBUG_MODE === 'true',
};

export const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CAREER: '/career',
  EDUCATION: '/education',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  CV: '/cv',
};

export const BREAKPOINTS = {
  MOBILE: '320px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE: '1920px',
};

export const COLORS = {
  PRIMARY: '#0366d6',
  SECONDARY: '#586069',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107',
  INFO: '#17a2b8',
  DARK: '#24292e',
  LIGHT: '#f6f8fa',
};

export const SECURITY = {
  // CSP directive defaults
  CSP_ENABLED: true,
  // Secret detection patterns (to block commits)
  SECRET_PATTERNS: [
    /aws_access_key_id/gi,
    /aws_secret_access_key/gi,
    /private_key/gi,
    /api_key/gi,
    /secret_key/gi,
    /password=/gi,
    /token=/gi,
  ],
};

/**
 * Get log level from environment
 */
export const getLogLevel = () => {
  return process.env.REACT_APP_LOG_LEVEL || LOG_LEVELS.INFO;
};

/**
 * Check if running in development
 */
export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development';
};

/**
 * Check if running in production
 */
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};
