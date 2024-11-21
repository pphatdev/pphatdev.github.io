/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      colors: {
        primary: {
          DEFAULT: "#00886e",
          50: "#eafff7",
          100: "#cbffeb",
          200: "#9dfddc",
          300: "#5ef7cc",
          400: "#25e9b8",
          500: "#00d0a1",
          600: "#00a983",
          700: "#00886e",
          800: "#006b57",
          900: "#00584a",
          950: "#00322b",
        }
      },
      fontFamily: {
        body: ["'Poppins'", "'Open San'", "'Sofia Sans Condensed'", "sans-serif", '"Suwannaphum"', "serif"],
        poppins: ['"Poppins"', 'sans-serif', '"Suwannaphum"', "serif"]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'faded': 'faded 2s linear',
      },
      keyframes: {
        faded: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}