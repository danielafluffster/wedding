/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:          '#1B2B4B',
        'french-blue': '#6B8CAE',
        'dusty-blue':  '#8BA7C4',
        'sky-blue':    '#C4D4E3',
        ivory:         '#FAF7F2',
        cream:         '#F2EBE0',
        gold:          '#C9A96E',
        'gold-light':  '#E8D5B0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':  'fadeIn 1.4s ease-out forwards',
        'fade-up':  'fadeUp 0.9s ease-out forwards',
        float:      'float 4s ease-in-out infinite',
        shimmer:    'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },                         '100%': { opacity: '1' } },
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%, 100%': { transform: 'translateY(0)' },    '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%, 100%': { opacity: '0.75' },                '50%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
};
