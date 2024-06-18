const http = require("http")
const port = 3000 ;
const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/"){
        res.end("<h1>You are on root page</i>");
    }
    else if(req.url == "/home"){
        res.end("<h1> This is Home Page </h1>");
    }
    else if(req.url == "/info"){
        res.end("<h1> This is Info Page </h1>");
    }
    else if(req.url == "/about"){
        res.end("<h1> This is About Page </h1>");
    }
    else if(req.url == "/contect"){
        res.end("<h1> This is Contect Page </h1>");
    }
    else if(req.url == "/project"){
        res.end("<h1> This is Project Page </h1>");
    }
    res.statusCode = 200;
    // res.setHeader('content-type', 'text/html')
})

server.listen(port, () => {
    console.log(`server is listining on port : ${port}`)
})