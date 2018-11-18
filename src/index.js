'use strict'

const fs = require('fs')
const path = require('path')

function strip (path) {
  console.log('Striping /index.html in %s...', JSON.stringify(path))
  let content = String(fs.readFileSync(path))
  content = content.replace(/\/index.html/gmi, '/')
  fs.writeFileSync(path, content)
}

function iterate (folder) {
  fs.readdirSync(folder).map(p => path.join(folder, p)).forEach(node => {
    const stat = fs.lstatSync(node)
    if (stat.isFile() && node.endsWith('.html')) {
      strip(node)
    } else if (stat.isDirectory()) {
      iterate(node)
    }
  })
}

module.exports = iterate
module.exports.iterate = iterate
module.exports.strip = strip
