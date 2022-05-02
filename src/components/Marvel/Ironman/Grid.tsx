import React from "react";
import { Col } from "react-bootstrap";

interface IProp {
  name: string;
  content: string;
  image: string;
  url: string;
}

function Grid(props: IProp) {
  return (
    <Col lg="4">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img className="ironman-m" src={props.image} alt={props.name} />
      </a>
      <h3>{props.name}</h3>
      <p className="ironman-p">
        <em>{props.content}</em>
      </p>
    </Col>
  );
}

export default Grid;
