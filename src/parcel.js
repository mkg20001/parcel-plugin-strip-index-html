'use strict'

const iterate = require('.')

module.exports = bundler => {
  const { outDir } = bundler.options

  bundler.on('bundled', bundle => {
    iterate(outDir)
  })
}
