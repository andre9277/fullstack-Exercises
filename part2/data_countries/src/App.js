import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountry from "./components/FilterCountry";
import MatchCountry from "./components/MatchCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  let countryfilt = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <div>
      <FilterCountry
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <MatchCountry countryfilt={countryfilt} />
    </div>
  );
};
export default App;
