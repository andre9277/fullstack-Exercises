//the application imports Node's built-in web server module
//const http = require("http");

//importing express. Is a function that is used to create an express application stored in the app variable
const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];

/*Exemplo das notes:
//createServer method of the http module to create a new web server.
const app = http.createServer((request, response) => {
  //event handler is registered to the server that is
  //called every time an HTTP request is made to the server's address http://localhost:3001
  response.writeHead(200, { "Content-Type": "application/json" }); // request is responded to with the status code 200,  array gets transformed into JSON with the JSON.stringify(notes) method.
  response.end(JSON.stringify(notes)); //content of the site to be returned set to Hello World.
});*/

//----define two routes to the application:-----

//1ºevent handler that is used to handle HTTP GET requests made to the application's / root:
app.get("/", (request, response) => {
  //accepts two parameters. The first request parameter contains all of the information of the HTTP request,
  //and the second response parameter is used to define how the request is responded to
  response.send("<h1>Hello World!</h1>");
});

//2ºevent handler that handles HTTP GET requests made to the notes path of the application:
app.get("/api/notes", (request, response) => {
  response.json(notes); //responded to with the json method
});

//bind the http server assigned to the app variable, to listen to HTTP requests sent to the port 3001:
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
