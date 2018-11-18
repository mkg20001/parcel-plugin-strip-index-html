'use strict'

const iterate = require('.')

module.exports = bundler => {
  const { outDir, hmr } = bundler.options

  bundler.on('bundled', bundle => {
    if (!hmr) { iterate(outDir) }
  })
}
