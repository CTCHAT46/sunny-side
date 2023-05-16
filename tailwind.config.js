/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../src/assets/img/desktop/image-header.jpg')",
        'sec-three-left': "url('../src/assets/img/desktop/image-graphic-design.jpg')",
        'sec-three-right': "url('../src/assets/img/desktop/image-photography.jpg')",
        display: ['group-focus'],
        opacity: ['gruop-focus'],
        inset: ['group-focus']
      },
    },
  },
  plugins: [],
}

