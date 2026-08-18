/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dream: {
          bg: "#FAF6FD",
          bgGrad: "#F3EAFD",
          lavenderLight: "#F1E7FB",
          lavender: "#E2D3F6",
          lilac: "#CDB5EE",
          violet: "#9D7EC7",
          violetDeep: "#7B55AB",
          accent: "#5E3D82",
          textMain: "#3B2D4A",
          textMuted: "#6B587E",
          cream: "#FDFBF7",
          creamBorder: "#EFE6D8",
          pinkSoft: "#FCEAF2",
          pinkAccent: "#EE98BF",
          washiLavender: "rgba(205, 181, 238, 0.65)",
          washiPink: "rgba(247, 214, 224, 0.7)",
        }
      },
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
        script: ['"Patrick Hand"', 'cursive'],
        sans: ['Quicksand', 'Nunito', 'sans-serif'],
      },
      boxShadow: {
        'scrapbook': '0 10px 30px -5px rgba(123, 85, 171, 0.12), 0 4px 12px -2px rgba(94, 61, 130, 0.08)',
        'letter': '0 15px 35px -5px rgba(94, 61, 130, 0.15), 0 5px 15px rgba(0, 0, 0, 0.04)',
        'envelope': '0 20px 40px -10px rgba(123, 85, 171, 0.22)',
        'soft': '0 4px 20px rgba(157, 126, 199, 0.15)',
        'glow': '0 0 25px rgba(189, 147, 249, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'wiggle-gentle': 'wiggle 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
