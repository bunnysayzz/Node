const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200);
        res.end('Welcome to my portfolio');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('No need to know me');
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end('Contact us at stfuazzo@gmail.com');
    } else {
        res.writeHead(404);
        res.end('404 ERROR Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});