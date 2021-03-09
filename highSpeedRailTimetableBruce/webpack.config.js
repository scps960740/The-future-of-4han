const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};