/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', filter: 'opacity(0)' },
        },
        exit: {
          '0%': { transform: 'scale(1)', filter: 'opacity(1)' },
          '100%': { transform: 'scale(0.9)', filter: 'opacity(0)' },
        }
      },
      animation: {
        enter: 'enter 200ms ease-in-out',
        exit: 'exit 150ms ease-in-out'
      }
    }
  },
  plugins: [],
}
