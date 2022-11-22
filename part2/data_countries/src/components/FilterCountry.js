const FilterCountry = ({ searchCountry, handleSearchCountry }) => {
  return (
    <div>
      Find countries:{" "}
      <input value={searchCountry} onChange={handleSearchCountry} />
    </div>
  );
};

export default FilterCountry;
