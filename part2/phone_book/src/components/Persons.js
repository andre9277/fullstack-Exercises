import Person from "./Person";

const Persons = ({ persons, nameFilter, dlePersonHandlerr }) => {
  return (
    <div>
      {nameFilter.length === 0 ? (
        <div> </div>
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
