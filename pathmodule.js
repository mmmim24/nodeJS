const path = require('path')

const filePath = path.join('content','subfolder','test.txt')
console.log(path.sep)
console.log(path.resolve(__dirname,'content','subfolder','test.txt'))
// console.log(filePath)
// console.log(__filename)
// console.log(__dirname)
