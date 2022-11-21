import Person from "./Person";

const Persons = ({ persons, nameFilter }) => {
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
            />
          ))
      )}
    </div>
  );
};

export default Persons;
