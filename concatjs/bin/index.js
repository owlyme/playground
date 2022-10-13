#!/usr/bin/env node

const concatFile = require('../src')

const arg = process.argv.slice(2)
// console.log(arg[0])
const [outputname, js] = arg
if (js && outputname ) {
  return  concatFile(js.split(','), outputname)
}
console.log(`outputname=${outputname}, js=${js}`)