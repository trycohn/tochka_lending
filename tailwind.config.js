/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#F4F7F5',
          100: '#E6EBE6',
          200: '#C7D3C7',
          300: '#A4B8A4',
          400: '#849E84',
          500: '#678567',
          600: '#4F664F',
          700: '#3F523F',
          800: '#324032',
          900: '#2A362A',
        },
        'sand': {
          50: '#FCFBF9',
          100: '#F7F4EB',
          200: '#EBE2D0',
          300: '#DECBAE',
          400: '#D2B389',
          500: '#C59A65',
          600: '#A3794A',
          700: '#83603B',
          800: '#694D31',
          900: '#563F2A',
        },
        'blush': {
          50: '#FCF8F8',
          100: '#F7EDED',
          200: '#EBD2D2',
          300: '#DDB6B6',
          400: '#CE9A9A',
          500: '#BE7F7F',
          600: '#996363',
          700: '#7A4F4F',
          800: '#634242',
          900: '#523737',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'glow': '0 0 40px -10px rgba(197, 154, 101, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
