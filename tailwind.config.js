/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo oscuro elegante
        'jovy-bg': '#0f172a', 
        // Tus nuevos colores pastel
        'jovy-lila': '#d8b4fe',    // Un lila suave (Tailwind violet-300)
        'jovy-celeste': '#7dd3fc', // Un celeste cielo (Tailwind sky-300)
        'jovy-accent': '#c084fc',  // Un lila un poco más fuerte para botones
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}