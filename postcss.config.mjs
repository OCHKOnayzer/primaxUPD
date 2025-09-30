const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(67, 67, 243, 1) 0%, rgba(47, 22, 148, 1) 98%)',
      }
    }
  }
};

export default config;