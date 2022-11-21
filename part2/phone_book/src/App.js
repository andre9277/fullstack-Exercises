import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState([]);

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
