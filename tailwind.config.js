/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
      extend: {
        colors: {
          primary: '#6563FF', // Blue
          offwhite: '#F0F0F0', // off white
          secondary: '#ffed4a', // Yellow
          danger: '#e3342f', // Red
        },
    },
  },

  corePlugins: {
    preflight: true, // ensures the default reset is applied
  },

  
  plugins: [
  ],
}

