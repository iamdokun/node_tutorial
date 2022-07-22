const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcom to our home page')
    } else if (req.url === '/about') {
        res.end('Welcom to our About page')
    }
    res.end(`<h1>Oops!!!</h1> <p>Error 404: Page Not Found</p> <a href="/">Back to Home Page</a>`)
});

server.listen(5000)