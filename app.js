const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about') {
        res.end('Welcome to about page')
    }
})

server.listen(5000)