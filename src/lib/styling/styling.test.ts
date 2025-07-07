import { describe, it, expect } from 'vitest'
import { cn } from './index'

describe('Styling utilities', () => {
  describe('cn function', () => {
    it('should merge class names correctly', () => {
      expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
      expect(cn('p-4', 'p-2')).toBe('p-2')
      expect(cn('bg-red-500', 'bg-blue-500', 'bg-green-500')).toBe('bg-green-500')
    })
  })
}) 