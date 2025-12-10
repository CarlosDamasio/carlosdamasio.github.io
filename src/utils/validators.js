/**
 * Input Validation Utilities
 * Provides functions to validate and sanitize user input
 */

/**
 * Validate URL format and safety
 * @param {string} url - URL to validate
 * @returns {boolean} - True if URL is valid and safe
 */
export const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const urlObj = new URL(url);
    // Only allow http/https protocols
    const allowedProtocols = ['http:', 'https:', 'mailto:'];
    return allowedProtocols.includes(urlObj.protocol);
  } catch (e) {
    return false;
  }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid format
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate date format (YYYY-MM-DD)
 * @param {string} dateString - Date string to validate
 * @returns {boolean} - True if date is valid
 */
export const isValidDate = (dateString) => {
  if (!dateString || typeof dateString !== 'string') {
    return false;
  }
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return false;
  }
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

/**
 * Validate that a string is not empty after trimming
 * @param {string} str - String to validate
 * @returns {boolean} - True if string is not empty
 */
export const isNotEmpty = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

/**
 * Validate that a value is a positive number
 * @param {any} value - Value to validate
 * @returns {boolean} - True if value is a positive number
 */
export const isPositiveNumber = (value) => {
  const num = Number(value);
  return !isNaN(num) && num > 0;
};

/**
 * Validate object has required fields
 * @param {object} obj - Object to validate
 * @param {string[]} requiredFields - Array of required field names
 * @returns {boolean} - True if all required fields exist and are not empty
 */
export const hasRequiredFields = (obj, requiredFields) => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  return requiredFields.every(field => {
    const value = obj[field];
    return value !== undefined && value !== null && value !== '';
  });
};

/**
 * Validate array of project objects
 * @param {array} projects - Array of project objects
 * @returns {boolean} - True if array is valid
 */
export const isValidProjectArray = (projects) => {
  if (!Array.isArray(projects)) {
    return false;
  }
  return projects.every(project =>
    hasRequiredFields(project, ['id', 'title', 'description', 'date'])
  );
};

/**
 * Validate array of experience objects
 * @param {array} experiences - Array of experience objects
 * @returns {boolean} - True if array is valid
 */
export const isValidExperienceArray = (experiences) => {
  if (!Array.isArray(experiences)) {
    return false;
  }
  return experiences.every(exp =>
    hasRequiredFields(exp, ['company', 'title', 'startDate', 'endDate'])
  );
};

/**
 * Sanitize text by removing HTML tags
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
export const sanitizeText = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }
  return text.replace(/<[^>]*>/g, '').trim();
};

/**
 * Get safe string representation of value
 * @param {any} value - Value to convert
 * @param {string} fallback - Fallback value if conversion fails
 * @returns {string} - Safe string representation
 */
export const safeString = (value, fallback = '') => {
  if (value === null || value === undefined) {
    return fallback;
  }
  try {
    return String(value);
  } catch (e) {
    return fallback;
  }
};

export default {
  isValidUrl,
  isValidEmail,
  isValidDate,
  isNotEmpty,
  isPositiveNumber,
  hasRequiredFields,
  isValidProjectArray,
  isValidExperienceArray,
  sanitizeText,
  safeString,
};
