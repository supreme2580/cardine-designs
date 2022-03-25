module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slowloadpop: {
          "0%": {
            transform: "scale(0.5)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        pops: {
          "80%": {
            transform: "scale(0.8)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-3deg)'
          },
          '50%': {
              transform: 'rotate(3deg)'
          },
        },
        blink: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        shake: {
          "0%, 100%": {
            transform: "rotate(-3deg)"
          },
          "50%": {
              transform: "rotate(3deg)"
          }
        }
      },
      animation: {
        slowloadpop: "slowloadpop 3s",
        pops: "pops 1s",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        blink: "blink 1s infinite",
        shake: "shake 0.2s infinite"
      }
    },
  },
  plugins: [],
}
