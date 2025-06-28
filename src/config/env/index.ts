export const env = {
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
  baseUrl: import.meta.env.BASE_URL,
  profile: {
    email: import.meta.env.VITE_PROFILE_EMAIL || '',
    telephone: import.meta.env.VITE_PROFILE_TELEPHONE || '',
    url: import.meta.env.VITE_VERCEL_URL ? `https://${import.meta.env.VITE_VERCEL_URL}` : '',
  },
};