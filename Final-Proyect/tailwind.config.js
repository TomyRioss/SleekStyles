/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Serif', 'serif'],
      },
      colors: {
        dark: {
          800: '#2c3e50',
          900: '#1a252f',
        },
        primary: '#8e44ad', // Purple
        accent: '#e74c3c', // Red
        background: '#ecf0f1', // Light Grey
        text: '#ffffff', // White
      },
    },
  },
  variants: {},
  plugins: [],
};
