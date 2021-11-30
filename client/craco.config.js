module.exports = {
  devServer: {
    port: 3001
  },
  style: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('autoprefixer'),
      ],
    },
  },
};
