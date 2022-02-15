const plugin = require('tailwindcss/plugin')

const rotater = plugin(function({addUtilities }){
  addUtilities({
    '.rotator' : {
      transform: 'rotateY(180deg)'
    }
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#277DFF', 
        secondary: '#FF4500',
        accent: '#EDF1F7',
        dark: '#14147A',
        orangee: '#FF4500',
        tick: '#6385F9',
        lightDash: '#EDF1F7',
        lightDashHov: '#888',
        captionRed: {
          1: 'rgba(255, 69, 0, 1)',
          2: 'rgba(255, 69, 0, 0.93)',
          3: 'rgba(255, 69, 0, 0)'
        },
        captionBlue: {
          1: 'rgba(39, 125, 255, 1)',
          2: 'rgba(39, 125, 255, 0)'
        },
      }
    },
    backgroundImage: {
      leftSide: "linear-gradient(179.68deg, #FFD7C8 0.27%, #6385F9 154.02%)",
      menu: "linear-gradient(180deg, #6385F9 -15.74%, #FFD7C8 112.63%)",
      vector: "linear-gradient(180deg, #FFD7C8 0%, #5195FF 100%)",
      redSide: "linear-gradient(104.97deg, #FF4500 39.45%, rgba(255, 69, 0, 0.932578) 50.31%, rgba(255, 69, 0, 0) 101.45%)"
    }
    
  },
  plugins: [rotater],
}
