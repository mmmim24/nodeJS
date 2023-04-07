
var n = 'John'

const names = require('./names')
const hello = require('./utils')
const alter = require('./alter')
require('./mindgrenade')

hello(n)
hello('mim')
n = 'Smilga'
console.log(names)
hello(names.peter)
console.log(alter.items)
