const http = require('http')
const PORT = 3000
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'application/json'
    });

    res.end(JSON.stringify({
        'id': 1,
        'name': 'Valli'
    }));
})

server.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`)
})

//Localhost -> http://127.0.0.1:3000/