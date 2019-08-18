'use strict'

const fs = require('fs')
const path = require('path')

function _strip (content) {
  content = content.replace(/\/?index.html/gmi, '/')

  return content
}

function strip (path) {
  console.log('Striping /index.html in %s...', JSON.stringify(path))
  let content = String(fs.readFileSync(path))
  content = _strip(content)
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
module.exports._strip = _strip
