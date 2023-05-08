/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-light': 'var(--color-bg-light)',
        'bg-light-secondary': 'var(--color-bg-light-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)',
        'dark-1': 'var(--color-dark-1)',
        'dark-2': 'var(--color-dark-2)',
        'dark-3': 'var(--color-dark-3)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
