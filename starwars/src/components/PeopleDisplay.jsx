import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const PeopleDisplay = props => {
  if (!props.name && !props.starships) {
    return <h1>Loading...</h1>;
  }

  return (
    // <div>
    //   <h1>Name: {props.name}</h1>
    //   <h2>Born: {props.year}</h2>
    //   <h3>Height: {props.height}</h3>
    //   <h3>Mass: {props.mass}</h3>
    // </div>

    <Col xs="6" sm="4">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>
            {props.name} was born in {props.year} and is {props.height} units
            tall and has a mass of {props.mass}
          </CardText>
          <CardText>
            <small className="text-muted">{props.name}</small>
          </CardText>
        </CardBody>
      </Card>
      <br />
    </Col>
  );
};

export default PeopleDisplay;
