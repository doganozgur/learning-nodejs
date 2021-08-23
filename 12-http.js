const http = require('http')

let port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end('Homepage')
    if(req.url === '/about')
        res.end('About')
})

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})