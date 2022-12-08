const express = require("express");
const app = express();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World! </h1>\n h");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

//how many entries are in the phonebook at the time of processing the request: (3.2)
app.get("/info", (request, response) => {
  const cont = persons.length;
  const date = new Date();
  //const resp = "Phonebook has info for " + cont + " people \n" + date;
  response.send(`Phonebook has info for ${cont} people <br/> ${date}`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
