const DetailCountry = ({ ct }) => {
  return (
    <div key={ct.name.common}>
      <h1>{ct.name.common}</h1>
      <div>Capital: {ct.capital}</div>
      <div>Area: {ct.area} </div>
      <div>
        Languages:
        <ul>
          {Object.values(ct.languages).map((item) => (
            <li key={item.length}>{item}</li>
          ))}
        </ul>
      </div>
      <img src={ct.flags.png} alt="not found" />
    </div>
  );
};

export default DetailCountry;
