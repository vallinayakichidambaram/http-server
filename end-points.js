const http = require('http')
const PORT = 3000
//Different URLs requesting data from the server are called end points
//Depending on the endpoints, we can vary the responses - req
const server = http.createServer((req, res) => {

    if(req.url === '/cats') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            'id': 300,
            'name': "Pearl Black"
        }))
    } else if(req.url === '/dogs') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Cute dog pics here!!!</h1>')
        res.write('</body>')
        res.write('</html>')

        res.end();
    } else{
        res.statusCode = 404;
        res.end();
    }

   
})

server.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`)
})

