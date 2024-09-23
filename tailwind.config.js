/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'green-500': '0px 4px 10px rgba(16, 185, 129, 0.6)',  
        'blue-500': '0px 4px 10px rgba(59, 130, 246, 0.6)',   
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      noto: ["Noto Sans JP", "sans-serif"],

    }
  },
  plugins: [],
}
