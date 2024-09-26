/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#302E2B', 
        customGreen:"#A3D160",
        colorChess1 :"#F7F8EA",
        colorChess2: "#779556",
    },
  },
  plugins: [],
}
}
