/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        background: '#F1F5F9',
        text: '#0F172A',
      },
      boxShadow: {
        soft: '0 10px 20px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
