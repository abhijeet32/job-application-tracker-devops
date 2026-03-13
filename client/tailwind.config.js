export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Scan all relevant files in the src directory
    './public/index.html',             // Include the main HTML file if needed
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#6a4feb',
        lightbg:'#6a4feb33',
        color2:'#190445',
        t1:'rgba(25, 4, 69, 0.8)',
        t2:'rgba(25, 4, 69, 0.5)',
        formoutline:'#6A4FEB'
      },
      fontSize:{
        heading:'100px'
      }
    },
  },
  plugins: [],
};
