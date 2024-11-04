/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'primary-100': '#228dff',
      },
      height: {
        'hvm': 'calc(100vh - 6.25rem)'
      },
      fontFamily: {
        'jet': 'JetBrains Mono, monospace'
      }
    },
  },
  plugins: [],
}

