const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            primary: '#1da1f2',
          },
          spacing: {
            '72': '18rem',
          },
        },
      },
      plugins: [],
    },
  },
};
export default config;
