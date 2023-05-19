/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1110px',
    },
    container: {
      screens: {
        tablet: '768px',
        desktop: '1110px',
      },
    },
    extend: {
      colors: {
        'pr-grayish-blue': 'hsl(234, 25%, 52%)',
        'pr-dark-purple': 'hsl(233, 54%, 16%)',
        'pr-gray': 'hsl(232, 10%, 56%)',
        'pr-redish-pink': 'hsl(341, 92%, 62%)',
        'pr-gradient-first': 'hsl(13, 100%, 64%)',
        'pr-gradient-second': 'hsl(322, 87%, 55%)',
        'sr-pink': 'hsl(341, 100%, 83%)',
        'sr-gradient-first': 'hsl(237, 100%, 64%)',
        'sr-gradient-second': 'hsl(322, 87%, 55%)',
        'sr-hover-color': 'hsl(341, 100%, 83%)',
      },
    },
  },
  plugins: [],
};
