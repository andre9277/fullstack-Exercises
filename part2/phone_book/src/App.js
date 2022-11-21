import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, number: 351431421 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value) => (
        <p key={value.id}>
          {value.name} {value.number}
        </p>
      ))}
    </div>
  );
};

export default App;
