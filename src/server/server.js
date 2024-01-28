const http = require('http');
// const { PORT } = require('../constants/constants');
let PORT = 3500
http.createServer(function (req, res) {
    let url = req.url
    console.log(url);
    switch (url) {
        case '/':
            res.write(`<div>MAIN</div>`)
            break;

        default:
            res.write(`<div>404</div>`)
            break;
    }
    // res.setHeader("Content-Type", "text/html; charset=utf-8;")
    // res.write(`Hello world`)
    // res.write(`<div>GOOD</div>`)

    res.end('ok')
}).listen(PORT);