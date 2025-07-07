import { describe, it, expect } from 'vitest'
import { isHttpsUrl } from './index'

describe('URL utilities', () => {
  describe('isHttpsUrl', () => {
    it('should return true for valid HTTPS URLs', () => {
      expect(isHttpsUrl('https://example.com')).toBe(true)
      expect(isHttpsUrl('https://www.google.com')).toBe(true)
      expect(isHttpsUrl('https://api.github.com/users/username')).toBe(true)
      expect(isHttpsUrl('https://localhost:3000')).toBe(true)
      expect(isHttpsUrl('https://example.com/path?param=value#fragment')).toBe(true)
    })

    it('should return false for non-HTTPS URLs', () => {
      expect(isHttpsUrl('http://example.com')).toBe(false)
      expect(isHttpsUrl('ftp://example.com')).toBe(false)
      expect(isHttpsUrl('ws://example.com')).toBe(false)
      expect(isHttpsUrl('wss://example.com')).toBe(false)
    })

    it('should return false for non-URL strings', () => {
      expect(isHttpsUrl('not-a-url')).toBe(false)
      expect(isHttpsUrl('example.com')).toBe(false)
      expect(isHttpsUrl('www.example.com')).toBe(false)
      expect(isHttpsUrl('')).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isHttpsUrl(undefined)).toBe(false)
    })

    it('should work with type guards', () => {
      const testUrl: string | undefined = 'https://example.com'
      if (isHttpsUrl(testUrl)) {
        // TypeScript should know testUrl is `https://${string}` here
        expect(testUrl).toBe('https://example.com')
      }
    })
  })
}) 