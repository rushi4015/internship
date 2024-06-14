const http = require("http")
// const env=require('env')
require('dotenv').config()
const port = process.env.PORT ;
const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url=='/'){
        res.end('<h1>this is HP WORLD</h1><I>Welcom to Our Company</i>')

    }
    else if(req.url=='/about'){
        res.end('<h1>this is HP WORLD</h1><i>Home Page!')
    }



    res.statusCode = 200;
    // res.setHeader('content-type', 'text/html')
    res.end("<h1> Rushi patel here </h1><i> Welcome to the developer world!</i>");
})

server.listen(port, () => {
    console.log(`server is listining on port : ${port}`)
})