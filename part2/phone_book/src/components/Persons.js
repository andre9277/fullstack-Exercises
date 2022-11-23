import Person from "./Person";

const Persons = ({ persons, nameFilter, dlePersonHandlerr }) => {
  return (
    <div key={persons.map((item) => item.id)}>
      {nameFilter.length === 0 ? (
        <div key={persons.map((item) => item.id)}>
          {""}
          {persons.map((item) => (
            <div key={item.id}>
              <Person
                key={item.id}
                id={item.id}
                name={item.name}
                number={item.number}
                dlePersonHandlerr={dlePersonHandlerr}
              />
            </div>
          ))}
        </div>
      ) : (
        persons
          .filter((name) =>
            name.name.toLowerCase().includes(nameFilter.toLowerCase())
          )
          .map((filtName) => (
            <Person
              key={filtName.id}
              id={filtName.id}
              name={filtName.name}
              number={filtName.number}
              dlePersonHandlerr={dlePersonHandlerr}
            />
          ))
      )}
    </div>
  );
};

export default Persons;
