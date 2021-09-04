const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  style: {
    postcss: {
      plugins: [
        pxtoviewport({
          mediaQuery: true,
          exclude: /^.*[^\.][^m]\.scss$/,
          viewportWidth: 760,
        }),
      ],
    },
  },
};
