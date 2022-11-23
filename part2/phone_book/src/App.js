import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
//import axios from "axios";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([{}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  //Correr comando: json-server --port 3001 --watch db.json
  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPersons) => {
      //console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);

  const dlePersonHandlerr = (id, name) => {
    const res = window.confirm(`Delete ${name} from phonebook?`);
    if (res) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
    setNameFilter("");
  };

  //Function that adds a new person with number
  const addNumber = (event) => {
    event.preventDefault();
    const numbObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    if (
      //metodo some: tests whether at least one element in the array passes the test implemented by the provided function.
      persons.some(
        (person) => person.name.toLowerCase() === numbObject.name.toLowerCase()
      )
    ) {
      alert(`${newName} is already added to phonebook!`);
      setNewName("");
      return;
    }

    personService.create(numbObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter hdFiltCg={handleFilterChange} />
      <h1> Add a new </h1>
      <PersonForm
        addNum={addNumber}
        nName={newName}
        nNumber={newNumber}
        hdNmCg={handleNameChange}
        hdNbCg={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameFilter={nameFilter}
        dlePersonHandlerr={dlePersonHandlerr}
      />
    </div>
  );
};

export default App;
