import React from "react";
import '../Component/CSS/header.css';
import Container from "./Container.js";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
