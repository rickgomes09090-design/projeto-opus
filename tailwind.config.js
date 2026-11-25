export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#101716',
        foreground: '#f2f5ef',
        card: '#192321',
        muted: '#a3b4ad',
        primary: '#c4f27c',
        border: '#30403a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
