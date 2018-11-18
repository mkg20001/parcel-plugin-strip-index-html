#!/usr/bin/env node

'use strict'

/* eslint-disable no-console */

const dist = process.argv[2]

if (!dist) {
  console.error(`Usage: ${process.argv[1]} <path-to-dist>`)
}

const fs = require('fs')
let folder = fs.realpathSync(dist)

console.log('Scanning %s...', JSON.stringify(folder))

const iterate = require('.')

iterate(folder)
