const express = require("express");
const app = express();

//1
app.get("/", (req, res) => {
  res.send("Hello,Express server.");
});
app.listen(2000, () => console.log("Server Started!"));
//2
app.use(express.json());
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];
app.post("/books", (req, res) => {
  const newBook = req.body;
  if (!newBook.id || !newBook.title || !newBook.author || !newBook.year) {
    return res.status(404).json({ error: "title,author,year is required" });
  } else {
    books.push(newBook);
    res
      .status(201)
      .json({ message: "Book added successfully.", book: newBook });
  }
});
//3
app.get("/books", (req, res) => {
  res.status(200).json(books);
});
//4
const todos = [{ id: 1, title: "Water the plants", day: "Saturday" }];
app.post("/totdos", (req, res) => {
  const newTodo = res.body;
  if (!newTodo.id || !newTodo.title || !newTodo.day) {
    res.status(404).json({ error: "id,title and day is required" });
  } else {
    todos.push(newTodo);
    res
      .status(200)
      .json({ message: "Todo added successfully.", todo: newTodo });
  }
});
//5
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});
