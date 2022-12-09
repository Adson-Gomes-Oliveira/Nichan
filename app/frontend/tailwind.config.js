/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "#360568",
        darkenPurple: "",
        midnightPurple: "#08000F",
        golden: "#F9A03F",
        scarlet: "",
      },
      fontFamily: {
        'bebasNeue': [ 'bebasNeue', 'sans-serif' ],
        'poppins': [ 'poppins', 'sans-serif' ]
      },
      backgroundImage: {
        'anime-background': "url('/src/assets/images/background-anime.png')"
      }
    },
  },
  plugins: [],
}
