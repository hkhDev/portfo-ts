import React from "react";
import { Container, Row } from "react-bootstrap";
import Grid from "./Grid";
import ironmanList from "./ironman-list";
import "./index.scss";

function Ironman() {
  return (
    <div id="ironman">
      <Container fluid>
        <h2>Phylogeny of Iron Man</h2>
        <Row>
          {ironmanList.map((ironman) => (
            <Grid
              name={ironman.name}
              content={ironman.content}
              image={ironman.image}
              url={ironman.url}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Ironman;
