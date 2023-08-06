const http = require('http')
const PORT = 3000

const catsList = [
    {
        'id': 300,
        'name': "Mojo"
    },
    {
        'id': 301,
        'name': "Coco"
    },
    {
        'id': 302,
        'name': "Blacky"
    },
    {
        'id': 303,
        'name': "Soji"
    }
]


const server = http.createServer((req, res) => {
    const items = req.url.split('/');
    //req -> '/cats/0'
    // items = ['','cats','0']
    if(items[1] === 'cats') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        if(items.length === 3) {
            const catIndex = Number(items[2]);
            res.end(JSON.stringify(catsList[catIndex]))
        } else {
            res.end(JSON.stringify(catsList))
        }
       
    } else if(items[1] === 'dogs') {
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

