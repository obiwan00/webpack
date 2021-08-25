const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function getFileNamesFromDirWithExtension({sourceDirPath, extensions}) {
  return fs.readdirSync(sourceDirPath).filter((fileName) => {
    return extensions.some((ext) => fileName.endsWith(`.${ext}`))
  })
}
function generateHtmlWebpackPlugins({pages, sourceDirPath}) {
  return pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: path.resolve(sourceDirPath, page),
        filename: `./${page.replace(/\.[^.]+$/, '.html')}`,
      })
  )
}

module.exports = {
  getFileNamesFromDirWithExtension,
  generateHtmlWebpackPlugins,
}
