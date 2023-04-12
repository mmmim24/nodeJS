const {createReadStream} = require('fs')
const stream = createReadStream('./content/bigtext.txt',{
    // highWaterMark:150000
    // encoding: 'utf-8'
})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})
