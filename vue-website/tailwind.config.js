module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,cjs,mjs,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cad-navy': '#1a1f3a',
        'cad-blue': '#0066cc',
        'cad-light': '#f8f9fa',
        'cad-accent': '#ff6b35',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

