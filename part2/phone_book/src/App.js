import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
//import axios from "axios";
import personService from "./services/persons";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
    const sameNamePerson = persons.find((o) => o.name === newName);
    if (
      //metodo some: tests whether at least one element in the array passes the test implemented by the provided function.
      persons.some(
        (person) => person.name.toLowerCase() === numbObject.name.toLowerCase()
      )
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...sameNamePerson, number: newNumber };
        console.log("mememe:", updatedPerson.id);
        personService
          .update(updatedPerson.id, updatedPerson)
          .then((returned) => {
            setPersons(
              persons.map(
                (person) => (person.name !== newName ? person : returned) //returned é um objeto!
              )
            );

            setNewName("");
            setNewNumber("");
          })
          .then(() => {
            setErrorMessage(
              `Person '${updatedPerson.name}' was updated in the server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      personService
        .create(numbObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
        })
        .then(() => {
          setErrorMessage(`Person '${numbObject.name}' was added to server`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
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

  const Notification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />

      <Filter handleFilterChange={handleFilterChange} nameFilter={nameFilter} />
      <h1> Add a new </h1>
      <PersonForm
        addNum={addNumber}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
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
