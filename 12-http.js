const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcom to our home page')
    } else if (req.url === '/about') {
        res.end('Welcom to our About page')
    }
    
});

server.listen(5000)