/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': { // Chocolate tones
          50: '#FDFBF9',
          100: '#F6EFEB',
          200: '#EADCD4',
          300: '#D5C1B5',
          400: '#BCA191',
          500: '#9B7A66',
          600: '#7B5A46',
          700: '#5C4131',
          800: '#462E21',
          900: '#331F15',
        },
        'sand': { // Warm Beige tones
          50: '#FFFEFC',
          100: '#FAF4EC',
          200: '#F2E5D3',
          300: '#E8D1B6',
          400: '#DAB894',
          500: '#C89B6D',
          600: '#B27D4A',
          700: '#8E6034',
          800: '#734A26',
          900: '#5E3B1C',
        },
        'blush': { // Soft Terracotta
          50: '#FFF9F7',
          100: '#FCEBE4',
          200: '#F5D1C4',
          300: '#ECAEA0',
          400: '#DF8B7A',
          500: '#CF6B56',
          600: '#BA523E',
          700: '#9B402E',
          800: '#803829',
          900: '#693025',
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
