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
    if(req.method === 'POST' && items[1] === 'cats') {
        req.on('data', (data) => {
            const catEntry = data.toString()
            console.log(`New entrant-- ${catEntry}`)
            catsList.push(JSON.parse(catEntry))
        });

    }
     else if(req.method === 'GET' && items[1] === 'cats') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        if(items.length === 3) {
            const catIndex = Number(items[2]);
            res.end(JSON.stringify(catsList[catIndex]))
        } else {
            res.end(JSON.stringify(catsList))
        }
       
    } else if(req.method === 'GET' && items[1] === 'dogs') {
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

/* From browser console make the call -- fetch ('http://localhost:3000/cats', {
    method: 'POST',
    body: JSON.stringify({
        id: 304,
        name: "Bobby"
    })
}) */