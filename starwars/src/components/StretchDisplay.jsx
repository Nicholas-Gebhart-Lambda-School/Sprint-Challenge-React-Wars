import React from "react";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const StretchDisplay = props => {
  if (!props.name && !props.starships) {
    return <h1>Loading...</h1>;
  }
  return <h1>{props.name}</h1>;
};

export default StretchDisplay;
