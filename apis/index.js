const express = require("express");
const app = express();
app.use(express.json());
const books = [
    {
        id: 1,
        name: "Book 1",
        author: "Author 1"
    },
    {
        id: 2,
        name: "Book 2",
        author: "Author 2"
    },
    {
        id: 3,
        name: "Book 3",
        author: "Author 3"
    },
    {
        id: 4,
        name: "Book 4",
        author: "Author 4"
    },
    {
        id: 5,
        name: "Book 5",
        author: "Author 5"
    }
]

app.get("/", (req, res) => {
    res.send("<h1>hello World!</h1>")
});


app.get("/home", (req, res) => {
    res.send("<h1>This is home page</h1>")
});

//formate of the api
// "loaclhost:3000/api/books"

app.get("/api/books", (req, res) => {
    res.send(books);
});

// "loaclhost:3000/api/books/1"
//means 1 entry
// app.get("/api/books/1", (req, res) => {
//     res.send(books[0]);
// });

app.get("/api/books/:bookID", (req, res) => {
    let id = req.params.bookID;
    let book = books.filter((item) => item.id == id)
    if (book.length == 0) {
        return res.status(404).send("Book not found");
    }
    res.send(book);
});

app.get("/api/books/:year/:month", (req, res) => {
    res.send(req.params);
});

app.post("/api/books", (req, res) => {
    let data = req.body;
    books.push({
        id: books.length + 1,
        name: data.name,
        author: data.author
    })
    res.status(201).send("new book is created");
})


app.delete("/api/books/:bookID", (req, res) => {
    let id = req.params.bookID;
    let book = books.find((item) => item.id == id)
    if (!book) {
        return res.status(404).send("Book not found");
    }
    const index = books.indexOf(book)
    console.log(index);
    books.splice(index,1);
    res.send(book);
});

app.put("/api/books/:bookId",(req,res)=>{
    let id=req.params.bookId;
    let book=books.find((item)=>item.id==id);
    console.log(book);
    if(!book){
        return res.status(404).send("Book not found");
    }
    book.name=req.body.name;
    book.author=req.body.author;
    res.send(book);
})

app.listen(3000);