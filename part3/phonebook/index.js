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

//Fetching a single resource: (3.3)
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id); //Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
  //console.log(typeof id);
  const person = persons.find((person) => person.id === id);
  //console.log(person);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

//Deleting resources (3.4)
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});


//----------Adding resources (3.5 e 3.6)----------

//Para aceder aos dados facilmente necessitamos do json-parser
//json-parser:  it takes the JSON data of a request, transforms it into a JavaScript object and then attaches it 
//to the body property of the request object before the route handler is called.
app.use(express.json())

//teste inicial no postman:
/*app.post("/api/persons", (request, response)=> {
    //sem o json-parser, o body era undifined
     const person = request.body;
     console.log(person);
     response.json(person);
})*/


app.post("/api/persons", (request, response)=> {

  //1º procuramos pelo id maior da lista e guardamos na variavel maxId
  //const maxId = persons.length > 0 ? Math.max(...persons.map(n =>n.id)) : 0

  //const person = request.body
  const body = request.body

  if( !body.name){
      return response.status(400).json({
          error: 'Name is missing!'
      })
  }

  else if( !body.number){
      return response.status(400).json({
          error: 'Number is missing!'
      })
  }
  
  else if(persons.filter(e => e.name === body.name).length > 0 ){
      return response.status(400).json({
          error: 'Name must be unique'
      })
  }
//-- console.log(request.headers)
  const person = {
      name: body.name,
      number: body.number,
      id: generateId ()

  }

  //2º a nova person tem um id do máximo +1
  //person.id = maxId +1 ;

  persons = persons.concat(person);

  response.json(person);
})

//Função que gera novo id
const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

//------------------3.7
app.use(morgan('tiny'))

/*app.get('/', function(req, res) {
    res.send('Hello, World!!!')
})*/

//------------------3.8


morgan.token('request_body', (request) => JSON.stringify(request.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :request_body'))
const requestLogger = ( request, response, next) => {
  console.log('Method', request.method)
  console.log('Path', request.path)
  console.log('Body', request.body)
  console.log('--')
  next()
}

app.use(requestLogger)


//Configuração porta:
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//----------------------------------------------
const cors = require('cors')

app.use(cors())