module.exports = (env, argv) => {
  const buildMode = argv.mode
  console.log({mode: buildMode})

  if (buildMode === 'development') {
    return require('./webpack-config/webpack.config.dev.js')
  }
  if (buildMode === 'production') {
    return require('./webpack-config/webpack.config.prod.js')
  }
}
