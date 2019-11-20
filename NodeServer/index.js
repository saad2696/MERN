const http = require('http');
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Server Connection is ok</h1></body></html>');
})

server.listen(port,hostname,()=>console.log(`Server at port ${hostname}:${port}`));