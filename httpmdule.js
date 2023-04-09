const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    else if(req.url==='/about'){
        res.end('Here is our short history  ');
    }
    // res.write('Welcome to home');
    else res.end(`<h2>It seems that you are trying to access a page that doesn't exist</h2>
    <h3><a href='/'>Back to Home</a></h3>
    `);
})



server.listen(1024)