const http = require('http');
const url = require('url');
const querystring = require('querystring');

function validateCreditCard(cardNumber) {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
    return regex.test(cardNumber);
}

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    const params = querystring.parse(query);
    if (pathname === '/validate') {
        const cardNumber = params.cardNumber;
        const isValid = validateCreditCard(cardNumber);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Credit Card ${isValid ? 'Valid' : 'Invalid'}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:8000/');
});
