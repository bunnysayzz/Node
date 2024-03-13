const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello im a response");
});
server.listen(8000, () => {
    console.log("Listening on port 1000");
});


const http = require("http");
const server = http.createServer((req, res) => {
    res.write("Hello, I'm a response");
    res.end();
});
server.listen(8000, () => {
    console.log("Listening on port 1000");
});

const http = require("http");
const server = http.createServer((req, res) => {
    res.write(`Hello, I'm a response for ${req.url}`);
    res.end();
});
server.listen(8000, () => {
    console.log("Listening on port 1000");
});