// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',  // Make sure this is correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};