import DetailCountry from "./DetailCountry";
import { useState } from "react";

const MatchCountry = ({ countryfilt }) => {
  const [show, setShow] = useState(-1);

  const handleClick = (index) => {
    //console.log(index);
    //console.log(show);
    //Se o valor do index é = ao show, o show =-1. Senão guarda o valor do index do país clicado!
    index === show ? setShow(-1) : setShow(index);
  };

  return (
    <div>
      {countryfilt.length > 10 ? (
        <div> Too many matches, specify another filter!!</div>
      ) : (
        countryfilt.map((ct, index) => (
          <div key={ct.name.common}>
            {countryfilt.length === 1 ? (
              <DetailCountry ct={ct} />
            ) : (
              <div>
                <li key={index}>{ct.name.common} </li>
                <button onClick={() => handleClick(index)}>
                  {show === index ? "hide" : "show"}
                </button>
                {
                  //se valor do index for então = ao do show mostra os detalhes do país que o utilizador pretende!
                  show === index && <DetailCountry ct={ct} />
                }
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MatchCountry;
