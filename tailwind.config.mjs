/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#023F72',
          gold: '#E8AF2F',
          goldHover: '#D49A24',
          dark: '#0B192C',
          slate: '#1E293B',
          bg: '#F8FAFC',
        },
        room: {
          free: '#10B981',
          busy: '#EF4444',
          cleaning: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
