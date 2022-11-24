const Filter = ({ handleFilterChange, nameFilter }) => {
  return (
    <div>
      filter shown with:{" "}
      <input onChange={handleFilterChange} value={nameFilter} />
    </div>
  );
};

export default Filter;
