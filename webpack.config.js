const developmentConfig = require('./webpack-config/webpack.config.dev.js')
const productionConfig = require('./webpack-config/webpack.config.prod.js')

module.exports = (env, argv) => {
  const buildMode = argv.mode
  console.log({mode: buildMode});

  if (buildMode === 'development') {
    return developmentConfig
  }
  if (buildMode === 'production') {
    return productionConfig
  }
};
