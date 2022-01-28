const withPreact = require('next-plugin-preact');

const config = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
  typescript: {
    ignoreDevErrors: true,
  },
};

module.exports = withPreact(config);
