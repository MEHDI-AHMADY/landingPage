/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container : {
      center: true ,
      screens : {
        sm : "600px",
        md : "700px" ,
        lg : "1000px" ,
        xl : "1240px" , 
      },
    },
    extend: {
      fontFamily : {
        "spaceGrotesk" : "spaceGrotesk",
        "spaceMedium" : "spaceMedium"
      },
      boxShadow : {
        "custom" : '0 5px 0 0 #191A23',
      }
    },
  },
  plugins: [],
};
