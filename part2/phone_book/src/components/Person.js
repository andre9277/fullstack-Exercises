const Person = ({ id, name, number, dlePersonHandlerr }) => {
  return (
    <div key={id}>
      
      {name} {number}{" "}
      <button onClick={() => dlePersonHandlerr(id, name)}> Delete </button>
    </div>
  );
};

export default Person;
