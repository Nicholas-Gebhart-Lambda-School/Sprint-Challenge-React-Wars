import React, { useState, useEffect } from "react";
import axios from "axios";
import StretchDisplay from "./StretchDisplay";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

const Pagination = styled.button`
  margin-bottom: 5%;
  padding: 0 20px;
`;

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
      <Pagination onClick={() => setNumState(1)}>First</Pagination>
      <Pagination onClick={() => setNumState(2)}>2</Pagination>
      <Pagination onClick={() => setNumState(3)}>3</Pagination>
      <Pagination onClick={() => setNumState(4)}>4</Pagination>
      <Pagination onClick={() => setNumState(5)}>5</Pagination>
      <Pagination onClick={() => setNumState(6)}>6</Pagination>
      <Pagination onClick={() => setNumState(7)}>7</Pagination>
      <Pagination onClick={() => setNumState(8)}>Last</Pagination>
      <Container>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
}

export default StretchData;
