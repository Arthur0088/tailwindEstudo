/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#f5f7fa',
        'neutralDGrey': '#4d4d4d',
        'neutralPrimary': '#28CB8B',
        'neutralGray': '#717171',
        'gray900': '#18191f',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

