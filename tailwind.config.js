/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(99,102,241, 0.7)" },
          "50%": { boxShadow: "0 0 32px rgba(99,102,241, 0.9)" },
        },
      },
      animation: {
        "slow-blink": "blink 1s ease-in-out infinite",
        'pulse-glow': 'pulseGlow 600ms ease-in-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
