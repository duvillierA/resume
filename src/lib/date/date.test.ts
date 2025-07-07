import { describe, it, expect } from 'vitest'
import { isPartialDate, formatPartialDate } from './index'

describe('Date utilities', () => {
  describe('isPartialDate', () => {
    it('should return true for valid partial dates', () => {
      expect(isPartialDate('2023-12')).toBe(true)
      expect(isPartialDate('1990-01')).toBe(true)
      expect(isPartialDate('2024-06')).toBe(true)
    })

    it('should return false for invalid partial dates', () => {
      expect(isPartialDate('2023')).toBe(false)    // Missing month
      expect(isPartialDate('2023-12-25')).toBe(false) // Full date
      expect(isPartialDate('abc-def')).toBe(false) // Non-numeric
      expect(isPartialDate('')).toBe(false)        // Empty string
    })

    it('should return false for null and undefined', () => {
      expect(isPartialDate(null)).toBe(false)
      expect(isPartialDate(undefined)).toBe(false)
    })

    it('should work with type guards', () => {
      const testDate: string | null = '2023-12'
      if (isPartialDate(testDate)) {
        // TypeScript should know testDate is PartialDate here
        expect(testDate).toBe('2023-12')
      }
    })
  })

  describe('formatPartialDate', () => {
    it('should format valid partial dates correctly', () => {
      expect(formatPartialDate('2023-01')).toBe('Jan 2023')
      expect(formatPartialDate('2023-12')).toBe('Dec 2023')
      expect(formatPartialDate('1990-06')).toBe('Jun 1990')
      expect(formatPartialDate('2024-03')).toBe('Mar 2024')
    })
  })
}) 