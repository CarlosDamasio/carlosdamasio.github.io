/**
 * Security Headers Configuration
 * Provides functions to apply security headers to protect against common web vulnerabilities
 */

/**
 * Security Headers to apply
 * These headers should be set via web server configuration
 */
export const SECURITY_HEADERS = {
  // Content Security Policy - prevents inline scripts and restricts resource origins
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net", // unsafe-inline for React, unsafe-eval for styled-components
    "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),

  // Prevents clickjacking attacks
  'X-Frame-Options': 'DENY',

  // Prevents MIME type sniffing
  'X-Content-Type-Options': 'nosniff',

  // Enables browser XSS protection
  'X-XSS-Protection': '1; mode=block',

  // Referrer Policy - controls when referrer info is sent
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Permissions Policy - controls which APIs can be used
  'Permissions-Policy': [
    'accelerometer=()',
    'ambient-light-sensor=()',
    'autoplay=()',
    'camera=()',
    'geolocation=()',
    'gyroscope=()',
    'magnetometer=()',
    'microphone=()',
    'midi=()',
    'payment=()',
    'usb=()',
  ].join(', '),

  // HSTS - force HTTPS (set with caution)
  // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

/**
 * Meta tags for security (applied in HTML head)
 */
export const SECURITY_META_TAGS = [
  {
    httpEquiv: 'X-UA-Compatible',
    content: 'ie=edge',
  },
  {
    httpEquiv: 'Content-Type',
    content: 'text/html; charset=utf-8',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black-translucent',
  },
];

/**
 * Apply security headers via meta tags (client-side)
 * Note: Server should also set HTTP headers for best security
 * @returns {void}
 */
export const applySecurityHeaders = () => {
  // Create CSP meta tag
  const cspMeta = document.createElement('meta');
  cspMeta.httpEquiv = 'Content-Security-Policy';
  cspMeta.content = SECURITY_HEADERS['Content-Security-Policy'];
  document.head.appendChild(cspMeta);

  // Create X-UA-Compatible meta tag
  const uaMeta = document.createElement('meta');
  uaMeta.httpEquiv = 'X-UA-Compatible';
  uaMeta.content = 'ie=edge';
  document.head.appendChild(uaMeta);

  if (process.env.NODE_ENV === 'development') {
    console.log('🔒 Security headers applied');
  }
};

/**
 * Get CSP header configuration for server
 * Use this in your backend/server configuration
 * @returns {object} - CSP configuration object
 */
export const getCspConfig = () => {
  return {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net', 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https:'],
      frameAncestors: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
    },
  };
};

/**
 * Get all security headers as object
 * @returns {object} - All security headers
 */
export const getAllSecurityHeaders = () => {
  return SECURITY_HEADERS;
};

/**
 * Validate that security headers are set
 * Run this in development to warn if headers might be missing
 */
export const validateSecurityHeaders = () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (!cspMeta) {
    console.warn('⚠️ SECURITY: CSP meta tag not found. Server should set CSP header.');
  }

  const xframe = document.querySelector('meta[http-equiv="X-Frame-Options"]');
  if (!xframe) {
    console.warn('⚠️ SECURITY: X-Frame-Options not set. Server should set this header.');
  }
};

/**
 * Log security configuration (development only)
 */
export const logSecurityConfig = () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  console.log('🔒 Security Headers Configuration:');
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    console.log(`  ${key}: ${value.substring(0, 50)}...`);
  });
};

export default {
  SECURITY_HEADERS,
  SECURITY_META_TAGS,
  applySecurityHeaders,
  getCspConfig,
  getAllSecurityHeaders,
  validateSecurityHeaders,
  logSecurityConfig,
};
