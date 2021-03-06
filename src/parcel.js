'use strict'

const iterate = require('.')

module.exports = bundler => {
  if (bundler.addAssetMiddleware) {
    bundler.addAssetMiddleware('html', require.resolve('./HtmlMiddleware'))
  } else {
    const { outDir, hmr } = bundler.options

    bundler.on('bundled', bundle => {
      if (!hmr) { iterate(outDir) }
    })
  }
}
