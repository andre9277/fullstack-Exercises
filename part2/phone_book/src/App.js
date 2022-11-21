import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([{}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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

    setPersons(persons.concat(numbObject));

    setNewName("");
    setNewNumber("");
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

      <PersonForm
        addNum={addNumber}
        nName={newName}
        nNumber={newNumber}
        hdNmCg={handleNameChange}
        hdNbCg={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  );
};

export default App;
