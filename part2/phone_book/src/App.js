import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const addNumber = (event) => {
    event.preventDefault();
    const numbObject = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(numbObject));
    setNewName("");
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value) => (
        <p key={value.id}>{value.name}</p>
      ))}
    </div>
  );
};

export default App;
