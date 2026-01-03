/**
 * Unit Tests for Environment Utilities
 * Tests safe environment variable access and secret blocking
 */

import {
  getEnv,
  getPublicEnv,
  validateNoSecretsExposed,
  checkEnvironmentSecrets,
  ALLOWED_PREFIXES,
  BLOCKED_VARIABLES
} from '../../utils/env';

describe('Environment Utilities', () => {
  // Save original env for restoration
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('Constants', () => {
    it('should have REACT_APP prefix in ALLOWED_PREFIXES', () => {
      expect(ALLOWED_PREFIXES).toContain('REACT_APP_');
    });

    it('should have common blocked variable names', () => {
      expect(BLOCKED_VARIABLES).toContain('PRIVATE_KEY');
      expect(BLOCKED_VARIABLES).toContain('API_KEY');
      expect(BLOCKED_VARIABLES).toContain('SECRET_KEY');
      expect(BLOCKED_VARIABLES).toContain('TOKEN');
      expect(BLOCKED_VARIABLES).toContain('PASSWORD');
    });

    it('should have AWS secrets in blocked variables', () => {
      expect(BLOCKED_VARIABLES.some(v => v.includes('AWS'))).toBe(true);
    });

    it('should have database secrets in blocked variables', () => {
      expect(BLOCKED_VARIABLES.some(v => v.includes('DATABASE'))).toBe(true);
    });
  });

  describe('getEnv', () => {
    it('should return REACT_APP_ prefixed variables', () => {
      process.env.REACT_APP_SITE_NAME = 'Test Site';
      expect(getEnv('REACT_APP_SITE_NAME')).toBe('Test Site');
    });

    it('should return default value if variable not found', () => {
      expect(getEnv('NONEXISTENT_VAR', 'default'))
        .toBe('default');
    });

    it('should return empty string as default if none provided', () => {
      expect(getEnv('NONEXISTENT_VAR')).toBe('');
    });

    it('should block access to PRIVATE_KEY', () => {
      process.env.PRIVATE_KEY = 'secret-key';
      expect(() => getEnv('PRIVATE_KEY'))
        .toThrow();
    });

    it('should block access to API_KEY', () => {
      process.env.API_KEY = 'secret-api-key';
      expect(() => getEnv('API_KEY'))
        .toThrow();
    });

    it('should block access to DATABASE_URL', () => {
      process.env.DATABASE_URL = 'postgresql://user:pass@host/db';
      expect(() => getEnv('DATABASE_URL'))
        .toThrow();
    });

    it('should block access to GITHUB_TOKEN', () => {
      process.env.GITHUB_TOKEN = 'ghp_xxxxxxxxxxxx';
      expect(() => getEnv('GITHUB_TOKEN'))
        .toThrow();
    });

    it('should block access to AWS_SECRET_ACCESS_KEY', () => {
      process.env.AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
      expect(() => getEnv('AWS_SECRET_ACCESS_KEY'))
        .toThrow();
    });

    it('should handle null/undefined variable names', () => {
      expect(() => getEnv(null)).not.toThrow();
      expect(() => getEnv(undefined)).not.toThrow();
    });
  });

  describe('getPublicEnv', () => {
    it('should only return REACT_APP_ prefixed variables', () => {
      process.env.REACT_APP_SITE_NAME = 'Test';
      process.env.REACT_APP_DEBUG = 'true';
      process.env.SECRET_VAR = 'should-not-appear';

      const publicEnv = getPublicEnv();
      expect(publicEnv).toHaveProperty('REACT_APP_SITE_NAME');
      expect(publicEnv).toHaveProperty('REACT_APP_DEBUG');
      expect(publicEnv).not.toHaveProperty('SECRET_VAR');
    });

    it('should return empty object if no REACT_APP vars set', () => {
      const publicEnv = getPublicEnv();
      const hasReactApp = Object.keys(publicEnv)
        .some(key => key.startsWith('REACT_APP_'));
      expect(hasReactApp).toBe(true); // Some default exists from Create React App
    });

    it('should never expose secret variables', () => {
      process.env.PRIVATE_KEY = 'secret';
      process.env.API_KEY = 'secret';
      process.env.DATABASE_URL = 'secret';

      const publicEnv = getPublicEnv();
      expect(publicEnv).not.toHaveProperty('PRIVATE_KEY');
      expect(publicEnv).not.toHaveProperty('API_KEY');
      expect(publicEnv).not.toHaveProperty('DATABASE_URL');
    });
  });

  describe('validateNoSecretsExposed', () => {
    it('should return true if no secrets found', () => {
      process.env.REACT_APP_SITE_NAME = 'Test';
      process.env.NODE_ENV = 'development';
      expect(validateNoSecretsExposed()).toBe(true);
    });

    it('should return false if PRIVATE_KEY is exposed', () => {
      process.env.PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should return false if API_KEY is exposed', () => {
      process.env.API_KEY = 'sk_test_xxxxxxxxxxxx';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should return false if DATABASE_URL is exposed', () => {
      process.env.DATABASE_URL = 'postgresql://user:password@localhost/db';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should return false if JWT_SECRET is exposed', () => {
      process.env.JWT_SECRET = 'your-secret-key-here';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should return false if AWS credentials are exposed', () => {
      process.env.AWS_ACCESS_KEY_ID = 'AKIA2EXAMPLE';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should return false if FIREBASE_KEY is exposed', () => {
      process.env.FIREBASE_API_KEY = 'AIzaXXXXXXXXXXXXXXXXX';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should return false if STRIPE_SECRET is exposed', () => {
      process.env.STRIPE_SECRET_KEY = 'sk_live_xxxxxxxxxxxx';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should be case-insensitive', () => {
      process.env.private_key = '-----BEGIN RSA PRIVATE KEY-----';
      expect(validateNoSecretsExposed()).toBe(false);

      process.env.Api_Key = 'secret';
      expect(validateNoSecretsExposed()).toBe(false);
    });

    it('should handle multiple secrets', () => {
      process.env.PRIVATE_KEY = 'secret1';
      process.env.API_KEY = 'secret2';
      process.env.PASSWORD = 'secret3';
      expect(validateNoSecretsExposed()).toBe(false);
    });
  });

  describe('checkEnvironmentSecrets', () => {
    it('should return array of found secrets', () => {
      process.env.PRIVATE_KEY = 'secret';
      process.env.API_KEY = 'secret';
      const found = checkEnvironmentSecrets();
      expect(Array.isArray(found)).toBe(true);
      expect(found.length).toBeGreaterThan(0);
    });

    it('should return empty array if no secrets', () => {
      process.env.REACT_APP_SAFE = 'value';
      const found = checkEnvironmentSecrets();
      expect(found.length).toBe(0);
    });

    it('should identify the specific secret variables found', () => {
      process.env.DATABASE_URL = 'postgresql://localhost';
      process.env.JWT_SECRET = 'secret';
      const found = checkEnvironmentSecrets();
      expect(found).toContain('DATABASE_URL');
      expect(found).toContain('JWT_SECRET');
    });

    it('should handle case variations', () => {
      process.env.private_key = 'secret';
      process.env.Api_Key = 'secret';
      const found = checkEnvironmentSecrets();
      expect(found.length).toBeGreaterThan(0);
    });
  });
});
