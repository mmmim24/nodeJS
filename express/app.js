const http = require('http')
const {readFileSync} = require('fs')
const homepage = readFileSync('./index.html')


const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    else{
        res.end('<h1>not found</h1>')
    }
    console.log('user')
})

server.listen(5000)
