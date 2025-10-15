/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'silkscreen': ['Silkscreen', 'monospace'],
        'share-tech': ['Share Tech Mono', 'monospace'],
        'atkinson': ['Atkinson Hyperlegible', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'blob': 'blob 7s infinite',
        'beam': 'beam 8s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
        'meteor': 'meteor 10s linear infinite',
        'reveal-up': 'reveal-up 0.6s ease-out',
        'reveal-down': 'reveal-down 0.6s ease-out',
        'pop-blob': 'pop-blob 5s infinite',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px 5px rgba(34, 211, 238, 0.6), 0 0 40px 10px rgba(167, 139, 250, 0.4)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(34, 211, 238, 0.8), 0 0 60px 20px rgba(167, 139, 250, 0.6)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-full': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        meteor: {
          '0%': { transform: 'translateY(-20%) translateX(-50%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(300%) translateX(-50%)', opacity: '0' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(80%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-down': {
          '0%': { opacity: '0', transform: 'translateY(-80%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-blob': {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}