/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{svelte,html,ts,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['night'],
  },
  plugins: [daisyui],
}
