/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        'orange-accent': '#FBF5EC',
        'orange-primary': '#FF852E',
        darkblue: '#121217',
        'darkblue-accent': '#010231',
        'main-text': '#393938',
      },
    },
  },
  plugins: [],
};
