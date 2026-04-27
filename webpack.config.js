// webpack.config.js
const path = require('path');

module.exports = {
  // The entry point of the application
  entry: './src/index.js',  // You can replace this with the path to your main JavaScript file
  
  // The output configuration
  output: {
    filename: 'bundle.js',  // The output bundle file name
    path: path.resolve(__dirname, 'dist'),  // The directory to save the output file
  },
  
  // Mode (development or production)
  mode: 'development',  // Change to 'production' for optimized builds
  
  // Loaders and plugins can be added here later (optional)
};