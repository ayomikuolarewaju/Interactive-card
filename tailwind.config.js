/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage:{
         'bg-card-back': "url('/img/bg-card-back.png')",
         'bg-card-front': "url('/img/bg-card-front.png')",
         'bg-main-desktop': "url('/img/bg-main-desktop.png')",
         'bg-main-mobile': "url('/img/bg-main-mobile.png')",
      },
      fontFamily: {
        PoppinsBold: ['Poppins-Bold'],
      }
    },
  },
  plugins: [],
}

