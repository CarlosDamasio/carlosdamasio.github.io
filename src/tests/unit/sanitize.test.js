/**
 * Unit Tests for Security Sanitization Functions
 * Tests XSS prevention and HTML sanitization
 */

import {
  escapeHtml,
  stripHtmlTags,
  sanitizeUrl,
  sanitizeText,
  sanitizeUserInput,
  sanitizeMarkdown,
  containsPotentialXss
} from '../../security/sanitize';

describe('Sanitization Utilities', () => {
  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHtml('<script>alert("xss")</script>'))
        .toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    });

    it('should escape ampersands', () => {
      expect(escapeHtml('&copy; 2024')).toBe('&amp;copy; 2024');
    });

    it('should handle single quotes', () => {
      expect(escapeHtml("It's a test")).toBe('It&#x27;s a test');
    });

    it('should handle forward slashes in JSON', () => {
      expect(escapeHtml('<\/script>')).toBe('&lt;&#x2F;script&gt;');
    });

    it('should return empty string for empty input', () => {
      expect(escapeHtml('')).toBe('');
    });

    it('should handle null/undefined gracefully', () => {
      expect(escapeHtml(null)).toBe('');
      expect(escapeHtml(undefined)).toBe('');
    });

    it('should preserve safe characters', () => {
      expect(escapeHtml('Hello World 123'))
        .toBe('Hello World 123');
    });
  });

  describe('stripHtmlTags', () => {
    it('should remove HTML tags', () => {
      expect(stripHtmlTags('<p>Hello <b>World</b></p>'))
        .toBe('Hello World');
    });

    it('should remove script tags and content', () => {
      expect(stripHtmlTags('Text<script>alert("xss")</script>More'))
        .toBe('TextMore');
    });

    it('should remove all attributes', () => {
      expect(stripHtmlTags('<div onclick="alert(1)">Test</div>'))
        .toBe('Test');
    });

    it('should handle nested tags', () => {
      expect(stripHtmlTags('<div><span><b>Nested</b></span></div>'))
        .toBe('Nested');
    });

    it('should preserve text content', () => {
      expect(stripHtmlTags('Just plain text'))
        .toBe('Just plain text');
    });

    it('should return empty string for empty input', () => {
      expect(stripHtmlTags('')).toBe('');
    });
  });

  describe('sanitizeUrl', () => {
    it('should allow http URLs', () => {
      expect(sanitizeUrl('http://example.com')).toBe('http://example.com');
    });

    it('should allow https URLs', () => {
      expect(sanitizeUrl('https://example.com')).toBe('https://example.com');
    });

    it('should block javascript: protocol', () => {
      expect(sanitizeUrl('javascript:alert("xss")')).toBe('');
    });

    it('should block data: protocol', () => {
      expect(sanitizeUrl('data:text/html,<script>alert(1)</script>'))
        .toBe('');
    });

    it('should block vbscript: protocol', () => {
      expect(sanitizeUrl('vbscript:msgbox("xss")')).toBe('');
    });

    it('should block file: protocol', () => {
      expect(sanitizeUrl('file:///etc/passwd')).toBe('');
    });

    it('should handle relative URLs safely', () => {
      expect(sanitizeUrl('/about')).toBe('/about');
    });

    it('should handle empty strings', () => {
      expect(sanitizeUrl('')).toBe('');
    });

    it('should handle null/undefined', () => {
      expect(sanitizeUrl(null)).toBe('');
      expect(sanitizeUrl(undefined)).toBe('');
    });

    it('should preserve query parameters', () => {
      expect(sanitizeUrl('https://example.com?key=value'))
        .toBe('https://example.com?key=value');
    });

    it('should block URLs with embedded script', () => {
      expect(sanitizeUrl('https://example.com/" onclick="alert(1)'))
        .toBe('');
    });
  });

  describe('sanitizeText', () => {
    it('should remove HTML and decode entities', () => {
      expect(sanitizeText('<p>Hello &amp; goodbye</p>'))
        .toBe('Hello & goodbye');
    });

    it('should remove dangerous event handlers', () => {
      expect(sanitizeText('Click me onclick="alert(1)"'))
        .toBe('Click me');
    });

    it('should preserve normal text', () => {
      expect(sanitizeText('This is safe text'))
        .toBe('This is safe text');
    });

    it('should handle encoded entities', () => {
      expect(sanitizeText('&lt;script&gt;')).toBe('<script>');
    });

    it('should return empty for empty input', () => {
      expect(sanitizeText('')).toBe('');
    });
  });

  describe('sanitizeUserInput', () => {
    it('should remove script tags from user input', () => {
      expect(sanitizeUserInput('<script>alert("xss")</script>hello'))
        .toBe('hello');
    });

    it('should remove event handlers', () => {
      expect(sanitizeUserInput('img src=x onerror=alert(1)'))
        .toBe('img src=x');
    });

    it('should remove control characters', () => {
      expect(sanitizeUserInput('hello\x00\x01world'))
        .toBe('helloworld');
    });

    it('should remove common XSS patterns', () => {
      expect(sanitizeUserInput('javascript:alert(1)'))
        .toContain('alert(1)');
      expect(sanitizeUserInput('javascript:alert(1)').includes('javascript:'))
        .toBe(false);
    });

    it('should allow safe HTML-like text', () => {
      expect(sanitizeUserInput('Use <strong> tags'))
        .toContain('strong');
    });

    it('should handle null/undefined', () => {
      expect(sanitizeUserInput(null)).toBe('');
      expect(sanitizeUserInput(undefined)).toBe('');
    });
  });

  describe('sanitizeMarkdown', () => {
    it('should preserve markdown formatting', () => {
      const result = sanitizeMarkdown('# Heading\n**bold** _italic_');
      expect(result).toContain('Heading');
      expect(result).toContain('bold');
    });

    it('should remove script blocks from markdown', () => {
      expect(sanitizeMarkdown('Text\n<script>alert(1)</script>\nMore'))
        .not.toContain('<script>');
    });

    it('should sanitize markdown links', () => {
      const result = sanitizeMarkdown('[Click](javascript:alert(1))');
      expect(result).not.toContain('javascript:');
    });

    it('should allow safe markdown syntax', () => {
      expect(sanitizeMarkdown('[Link](https://example.com)'))
        .toContain('Link');
    });

    it('should handle empty markdown', () => {
      expect(sanitizeMarkdown('')).toBe('');
    });

    it('should remove dangerous HTML', () => {
      expect(sanitizeMarkdown('Text <iframe src="bad.com"></iframe> End'))
        .not.toContain('iframe');
    });
  });

  describe('containsPotentialXss', () => {
    it('should detect script tags', () => {
      expect(containsPotentialXss('<script>alert(1)</script>'))
        .toBe(true);
    });

    it('should detect javascript: protocol', () => {
      expect(containsPotentialXss('javascript:alert(1)'))
        .toBe(true);
    });

    it('should detect on* event handlers', () => {
      expect(containsPotentialXss('onclick="alert(1)"'))
        .toBe(true);
    });

    it('should detect iframe tags', () => {
      expect(containsPotentialXss('<iframe src="bad"></iframe>'))
        .toBe(true);
    });

    it('should detect embed tags', () => {
      expect(containsPotentialXss('<embed src="bad.swf">'))
        .toBe(true);
    });

    it('should detect object tags', () => {
      expect(containsPotentialXss('<object data="bad"></object>'))
        .toBe(true);
    });

    it('should detect form tags', () => {
      expect(containsPotentialXss('<form action="phish.com"></form>'))
        .toBe(true);
    });

    it('should allow safe content', () => {
      expect(containsPotentialXss('This is safe text'))
        .toBe(false);
    });

    it('should allow safe HTML tags', () => {
      expect(containsPotentialXss('<p>Paragraph</p>'))
        .toBe(false);
    });

    it('should handle null/undefined', () => {
      expect(containsPotentialXss(null)).toBe(false);
      expect(containsPotentialXss(undefined)).toBe(false);
    });
  });
});
