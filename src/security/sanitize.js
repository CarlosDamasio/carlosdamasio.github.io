/**
 * XSS Prevention and HTML Sanitization
 * Provides utilities to prevent Cross-Site Scripting attacks
 */

/**
 * HTML entity map for escaping
 */
const HTML_ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
};

/**
 * Escape HTML special characters
 * Prevents XSS by converting characters to HTML entities
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text safe for HTML
 */
export const escapeHtml = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text.replace(/[&<>"'\/]/g, char => HTML_ENTITIES[char]);
};

/**
 * Strip HTML tags from text
 * Removes all HTML tags, leaving only plain text
 * @param {string} html - HTML text to strip
 * @returns {string} - Plain text without HTML tags
 */
export const stripHtmlTags = (html) => {
  if (!html || typeof html !== 'string') {
    return '';
  }

  return html.replace(/<[^>]*>/g, '');
};

/**
 * Sanitize URL to prevent XSS
 * Only allows safe protocols (http, https, mailto)
 * @param {string} url - URL to sanitize
 * @returns {string} - Safe URL or empty string if unsafe
 */
export const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  try {
    // Try to parse as URL
    const urlObj = new URL(url);

    // Allow only safe protocols
    const safeProtocols = ['http:', 'https:', 'mailto:'];
    if (!safeProtocols.includes(urlObj.protocol)) {
      console.warn(`Unsafe URL protocol blocked: ${urlObj.protocol}`);
      return '';
    }

    // Prevent javascript: protocol
    if (url.toLowerCase().includes('javascript:')) {
      console.warn('JavaScript protocol blocked in URL');
      return '';
    }

    return urlObj.toString();
  } catch (e) {
    // If not a valid URL, return empty string
    console.warn(`Invalid URL rejected: ${url}`);
    return '';
  }
};

/**
 * Sanitize text content
 * Escapes HTML and removes potentially dangerous content
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
export const sanitizeText = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  // First strip any HTML tags
  let clean = stripHtmlTags(text);

  // Then escape remaining special characters
  clean = escapeHtml(clean);

  return clean.trim();
};

/**
 * Sanitize user input for safe display
 * @param {string} input - User input to sanitize
 * @returns {string} - Safe input for display
 */
export const sanitizeUserInput = (input) => {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Remove leading/trailing whitespace
  let clean = input.trim();

  // Remove control characters
  clean = clean.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');

  // Remove script tags
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove event handlers
  clean = clean.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  clean = clean.replace(/on\w+\s*=\s*[^\s>]*/gi, '');

  // Escape HTML entities
  clean = escapeHtml(clean);

  return clean;
};

/**
 * Create safe HTML from trusted content
 * Only use with content you control or trust
 * @param {string} htmlString - HTML string to create element from
 * @returns {string} - The HTML string (caller responsible for safety)
 */
export const trustHtml = (htmlString) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      '⚠️ SECURITY: Using trustHtml - ensure content is from trusted source only'
    );
  }
  return htmlString;
};

/**
 * Validate and sanitize markdown-like text
 * Allows basic markdown syntax but prevents code injection
 * @param {string} markdown - Markdown text to sanitize
 * @returns {string} - Sanitized markdown
 */
export const sanitizeMarkdown = (markdown) => {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  // Remove script tags
  let clean = markdown.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove event handlers
  clean = clean.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');

  // Remove dangerous HTML tags but allow markdown formatting
  const dangerousTags = [
    'script',
    'iframe',
    'object',
    'embed',
    'form',
    'input',
    'button',
  ];

  dangerousTags.forEach(tag => {
    const regex = new RegExp(`<${tag}\\b[^<]*(?:(?!<\\/${tag}>)<[^<]*)*<\\/${tag}>`, 'gi');
    clean = clean.replace(regex, '');
  });

  return clean;
};

/**
 * Check if string contains potential XSS
 * @param {string} text - Text to check
 * @returns {boolean} - True if potential XSS detected
 */
export const containsPotentialXss = (text) => {
  if (!text || typeof text !== 'string') {
    return false;
  }

  const xssPatterns = [
    /<script/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<embed/gi,
    /<object/gi,
    /<form/gi,
  ];

  return xssPatterns.some(pattern => pattern.test(text));
};

export default {
  escapeHtml,
  stripHtmlTags,
  sanitizeUrl,
  sanitizeText,
  sanitizeUserInput,
  trustHtml,
  sanitizeMarkdown,
  containsPotentialXss,
};
