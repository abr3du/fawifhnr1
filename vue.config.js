const path = require('path');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@firebaseConfig': path.resolve(__dirname, 'firebaseConfig.js'), // Update the path based on your file structure
      },
    },
  },
};
