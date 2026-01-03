/**
 * Unit Tests for Validator Functions
 * Tests input validation for URLs, emails, dates, and arrays
 */

import {
  isValidUrl,
  isValidEmail,
  isValidDate,
  isNotEmpty,
  isPositiveNumber,
  hasRequiredFields,
  isValidProjectArray,
  isValidExperienceArray,
  sanitizeText,
  safeString
} from '../../utils/validators';

describe('Validator Utilities', () => {
  describe('isValidUrl', () => {
    it('should validate http URLs', () => {
      expect(isValidUrl('http://example.com')).toBe(true);
    });

    it('should validate https URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true);
    });

    it('should validate URLs with paths', () => {
      expect(isValidUrl('https://example.com/path/to/page')).toBe(true);
    });

    it('should validate URLs with query params', () => {
      expect(isValidUrl('https://example.com?key=value')).toBe(true);
    });

    it('should validate relative URLs', () => {
      expect(isValidUrl('/about')).toBe(true);
      expect(isValidUrl('./relative')).toBe(true);
    });

    it('should reject malformed URLs', () => {
      expect(isValidUrl('not a url')).toBe(false);
      expect(isValidUrl('://missing')).toBe(false);
    });

    it('should reject javascript: protocol', () => {
      expect(isValidUrl('javascript:alert(1)')).toBe(false);
    });

    it('should handle null/undefined', () => {
      expect(isValidUrl(null)).toBe(false);
      expect(isValidUrl(undefined)).toBe(false);
    });

    it('should handle empty strings', () => {
      expect(isValidUrl('')).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    it('should validate proper email addresses', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('carlos@damasio.me')).toBe(true);
    });

    it('should validate emails with dots in local part', () => {
      expect(isValidEmail('first.last@example.com')).toBe(true);
    });

    it('should validate emails with numbers', () => {
      expect(isValidEmail('user123@example.com')).toBe(true);
    });

    it('should reject emails without @', () => {
      expect(isValidEmail('userexample.com')).toBe(false);
    });

    it('should reject emails without domain', () => {
      expect(isValidEmail('user@')).toBe(false);
    });

    it('should reject emails without local part', () => {
      expect(isValidEmail('@example.com')).toBe(false);
    });

    it('should reject emails with spaces', () => {
      expect(isValidEmail('user name@example.com')).toBe(false);
    });

    it('should handle null/undefined', () => {
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
    });

    it('should handle empty strings', () => {
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidDate', () => {
    it('should validate ISO date format', () => {
      expect(isValidDate('2024-01-15')).toBe(true);
      expect(isValidDate('2023-12-25')).toBe(true);
    });

    it('should validate dates with time', () => {
      expect(isValidDate('2024-01-15T12:30:00')).toBe(true);
    });

    it('should validate valid Date objects', () => {
      expect(isValidDate(new Date('2024-01-15'))).toBe(true);
    });

    it('should reject invalid date strings', () => {
      expect(isValidDate('invalid')).toBe(false);
      expect(isValidDate('2024-13-01')).toBe(false);
    });

    it('should reject invalid Date objects', () => {
      expect(isValidDate(new Date('invalid'))).toBe(false);
    });

    it('should reject empty dates', () => {
      expect(isValidDate('')).toBe(false);
    });

    it('should handle null/undefined', () => {
      expect(isValidDate(null)).toBe(false);
      expect(isValidDate(undefined)).toBe(false);
    });

    it('should validate "Present" for ongoing dates', () => {
      expect(isValidDate('Present')).toBe(true);
    });
  });

  describe('isNotEmpty', () => {
    it('should validate non-empty strings', () => {
      expect(isNotEmpty('Hello')).toBe(true);
    });

    it('should reject empty strings', () => {
      expect(isNotEmpty('')).toBe(false);
    });

    it('should reject whitespace-only strings', () => {
      expect(isNotEmpty('   ')).toBe(false);
    });

    it('should validate arrays with items', () => {
      expect(isNotEmpty([1, 2, 3])).toBe(true);
    });

    it('should reject empty arrays', () => {
      expect(isNotEmpty([])).toBe(false);
    });

    it('should validate objects with properties', () => {
      expect(isNotEmpty({ a: 1 })).toBe(true);
    });

    it('should reject empty objects', () => {
      expect(isNotEmpty({})).toBe(false);
    });

    it('should handle null/undefined', () => {
      expect(isNotEmpty(null)).toBe(false);
      expect(isNotEmpty(undefined)).toBe(false);
    });
  });

  describe('isPositiveNumber', () => {
    it('should validate positive integers', () => {
      expect(isPositiveNumber(5)).toBe(true);
      expect(isPositiveNumber(100)).toBe(true);
    });

    it('should validate positive decimals', () => {
      expect(isPositiveNumber(3.14)).toBe(true);
    });

    it('should validate zero', () => {
      expect(isPositiveNumber(0)).toBe(true);
    });

    it('should reject negative numbers', () => {
      expect(isPositiveNumber(-5)).toBe(false);
    });

    it('should reject non-numeric values', () => {
      expect(isPositiveNumber('5')).toBe(false);
      expect(isPositiveNumber('abc')).toBe(false);
    });

    it('should reject NaN', () => {
      expect(isPositiveNumber(NaN)).toBe(false);
    });

    it('should handle null/undefined', () => {
      expect(isPositiveNumber(null)).toBe(false);
      expect(isPositiveNumber(undefined)).toBe(false);
    });
  });

  describe('hasRequiredFields', () => {
    it('should validate objects with required fields', () => {
      const obj = { name: 'John', email: 'john@example.com' };
      expect(hasRequiredFields(obj, ['name', 'email'])).toBe(true);
    });

    it('should reject objects missing required fields', () => {
      const obj = { name: 'John' };
      expect(hasRequiredFields(obj, ['name', 'email'])).toBe(false);
    });

    it('should reject objects with empty required fields', () => {
      const obj = { name: '', email: 'john@example.com' };
      expect(hasRequiredFields(obj, ['name', 'email'])).toBe(false);
    });

    it('should handle empty required fields array', () => {
      expect(hasRequiredFields({ name: 'John' }, [])).toBe(true);
    });

    it('should handle null/undefined object', () => {
      expect(hasRequiredFields(null, ['name'])).toBe(false);
      expect(hasRequiredFields(undefined, ['name'])).toBe(false);
    });

    it('should handle null/undefined required fields', () => {
      const obj = { name: 'John' };
      expect(hasRequiredFields(obj, null)).toBe(false);
    });
  });

  describe('isValidProjectArray', () => {
    it('should validate array of valid projects', () => {
      const projects = [
        {
          id: 'p1',
          title: 'Project 1',
          company: 'Company A',
          technologies: ['React']
        },
        {
          id: 'p2',
          title: 'Project 2',
          company: 'Company B',
          technologies: ['Node.js']
        }
      ];
      expect(isValidProjectArray(projects)).toBe(true);
    });

    it('should reject project missing required fields', () => {
      const projects = [
        {
          id: 'p1',
          title: 'Project 1'
          // missing company and technologies
        }
      ];
      expect(isValidProjectArray(projects)).toBe(false);
    });

    it('should reject non-array input', () => {
      expect(isValidProjectArray({ id: 'p1' })).toBe(false);
    });

    it('should handle empty array', () => {
      expect(isValidProjectArray([])).toBe(true);
    });

    it('should handle null/undefined', () => {
      expect(isValidProjectArray(null)).toBe(false);
      expect(isValidProjectArray(undefined)).toBe(false);
    });
  });

  describe('isValidExperienceArray', () => {
    it('should validate array of valid experiences', () => {
      const experiences = [
        {
          company: 'Company A',
          jobTitle: 'Engineer',
          startDate: '2020-01-01',
          endDate: '2021-01-01'
        },
        {
          company: 'Company B',
          jobTitle: 'Lead',
          startDate: '2021-06-01',
          endDate: 'Present'
        }
      ];
      expect(isValidExperienceArray(experiences)).toBe(true);
    });

    it('should reject experience missing required fields', () => {
      const experiences = [
        {
          company: 'Company A',
          jobTitle: 'Engineer'
          // missing dates
        }
      ];
      expect(isValidExperienceArray(experiences)).toBe(false);
    });

    it('should reject non-array input', () => {
      expect(isValidExperienceArray({ company: 'Company A' })).toBe(false);
    });

    it('should handle empty array', () => {
      expect(isValidExperienceArray([])).toBe(true);
    });

    it('should handle null/undefined', () => {
      expect(isValidExperienceArray(null)).toBe(false);
      expect(isValidExperienceArray(undefined)).toBe(false);
    });
  });

  describe('sanitizeText', () => {
    it('should remove HTML tags', () => {
      expect(sanitizeText('<p>Hello</p>')).toBe('Hello');
    });

    it('should remove script tags', () => {
      expect(sanitizeText('Hello<script>alert(1)</script>World'))
        .toBe('HelloWorld');
    });

    it('should preserve safe text', () => {
      expect(sanitizeText('Hello World')).toBe('Hello World');
    });

    it('should handle empty strings', () => {
      expect(sanitizeText('')).toBe('');
    });

    it('should handle null/undefined', () => {
      expect(sanitizeText(null)).toBe('');
      expect(sanitizeText(undefined)).toBe('');
    });
  });

  describe('safeString', () => {
    it('should convert value to string safely', () => {
      expect(safeString('test')).toBe('test');
      expect(safeString(123)).toBe('123');
    });

    it('should handle null/undefined', () => {
      expect(safeString(null)).toBe('');
      expect(safeString(undefined)).toBe('');
    });

    it('should handle objects', () => {
      const result = safeString({ key: 'value' });
      expect(typeof result).toBe('string');
    });

    it('should handle arrays', () => {
      const result = safeString([1, 2, 3]);
      expect(typeof result).toBe('string');
      expect(result).toContain('1');
    });

    it('should not expose sensitive data', () => {
      const sensitiveObj = { password: 'secret' };
      const result = safeString(sensitiveObj);
      expect(result).not.toContain('secret');
    });
  });
});
