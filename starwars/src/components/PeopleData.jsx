import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleDisplay from "./PeopleDisplay";
import { Container, Row } from "reactstrap";

function PeopleData() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
        const person = res.data.results;
        setPeopleData(person);
      })
      .catch(err => console.error("Nothing is working", err));
  }, []);
  return (
    <Container>
      <Row>
        {peopleData.map((person, index) => {
          return (
            <PeopleDisplay
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
      </Row>
    </Container>
  );
}

export default PeopleData;
