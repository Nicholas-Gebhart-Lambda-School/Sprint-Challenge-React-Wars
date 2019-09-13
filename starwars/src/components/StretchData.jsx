import React, { useState, useEffect } from "react";
import axios from "axios";
import StretchDisplay from "./StretchDisplay";

function StretchData() {
  const [numState, setNumState] = useState(1);
  const [stretchState, setStretchState] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${numState}`)
      .then(response => {
        console.log(response.data.results);
        const stretch = response.data.results;
        setStretchState(stretch);
      })
      .catch(error => {
        console.log("We messed up", error);
      });
  }, [numState]);

  return (
    <div>
      <button onClick={() => setNumState(1)}>1</button>
      <button onClick={() => setNumState(2)}>2</button>
      <button onClick={() => setNumState(3)}>3</button>
      <button onClick={() => setNumState(4)}>4</button>
      <button onClick={() => setNumState(5)}>5</button>
      <button onClick={() => setNumState(6)}>6</button>
      <button onClick={() => setNumState(7)}>7</button>
      <button onClick={() => setNumState(8)}>8</button>
      {stretchState.map((person, index) => {
        return (
          <StretchDisplay
            key={index}
            name={person.name}
            year={person.birth_year}
            height={person.height}
            mass={person.mass}
            ships={person.starships}
            films={person.films}
          />
        );
      })}
    </div>
  );
}

export default StretchData;
