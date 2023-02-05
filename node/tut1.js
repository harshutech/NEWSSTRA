const { readFileSync } = require('fs');
const http = require('http');
let { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;

const home = readFileSync('index.html')
const about = readFileSync('about.html')
const services= readFileSync('services.html')
const contact = readFileSync('contact.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/index.html'){
        res.end(home);
    }
    else if(url == '/about.html'){
        res.end(about);
    }
    else if(url == '/services.html'){
        res.end(services);
    }
    else if(url == '/contact.html'){
        res.end(contact);
    }
    else{
        res.end("<h1>404 Not Found<h1>");
        res.statusCode = 409;

    }



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});