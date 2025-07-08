import { useCallback } from 'react';

export const useCopyToClipboard = () => {
  const copyToClipboard = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }
    await navigator.clipboard.writeText(text);
    return true
  }, []);

  return {
    copyToClipboard,
  };
}; 