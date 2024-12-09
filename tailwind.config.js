/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',     // Extra small screen
        'sm': '640px',     // Small screen
        'md': '768px',     // Medium screen
        'lg': '1024px',    // Large screen
        'xl': '1280px',    // Extra large screen
        '2xl': '1536px',   // 2x extra large screen
      },

      // animation keyframes 
      keyframes: {
        spinCustom: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        expand: {
          '0%': { marginTop : '100px', opacity: '0' },
          '100%': { marginTop: '0', opacity: '1' }, // Adjust maxHeight based on your content size
        },
        contract: {
          '0%': { maxHeight: '500px', opacity: '1', transform: 'scaleY(1)' },
          '100%': { maxHeight: '0', opacity: '0', transform: 'scaleY(0.9)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        

      },
      animation: {
        spinCustom: 'spinCustom 10s linear infinite',
        expand: 'expand 0.3s ease-in-out', // Custom expand animation
        contract: 'contract 0.3s ease-in', // Custom expand animation
        scroll: 'scroll 40s linear infinite', // Adjust duration as needed
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Set Inter as the primary sans font
      },

      boxShadow: {
        'custom-equal': '-2px 0px 10px 5px rgba(0, 0, 0, 0.1)', // yeh chaaron sides ke liye hai
      },
    },
  },
  plugins: [],
}