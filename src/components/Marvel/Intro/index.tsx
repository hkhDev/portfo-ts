import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./index.scss";

function Intro() {
  return (
    <Row id="marvel-intro">
      <Col lg="6">
        <h1 className="marvel-intro-heading">Fanaticism of MCU and Iron Man</h1>
        <div className="marvel-intro-description">
          <h3>Want to be a hero?</h3>
          <h3>Explore more on</h3>
          <br />
        </div>
        <div className="marvel-intro-game">
          <Button
            href="mini_game/avengers_assemble/index.html"
            variant="outline-light"
            target="_blank"
            className="marvel-game-btn"
          >
            <Row className="marvel-game-btn-row">
              <Col xs="3">
                <img
                  className="avengers-btn-img marvel-game-btn-img"
                  src="images/marvel/avengers-icon.png"
                  alt="avengers-icon"
                />
              </Col>
              <Col xs="9" className="marvel-game-btn-text">
                Avengers Assemble
              </Col>
            </Row>
          </Button>
          <Button
            href="mini_game/defect_ulton/index.html"
            variant="dark"
            target="_blank"
            className="marvel-game-btn"
          >
            <Row className="marvel-game-btn-row">
              <Col xs="4">
                <img
                  className="ulton-btn-img marvel-game-btn-img"
                  src="images/marvel/ulton.png"
                  alt="ultron"
                />
              </Col>
              <Col xs="8" className="marvel-game-btn-text">
                Defeat Ultron
              </Col>
            </Row>
          </Button>
        </div>
        <br />
      </Col>
      <Col lg="6">
        <img
          className="ironman1"
          src="images/marvel/ironman1.png"
          alt="ironman wallpaper"
        />
      </Col>
    </Row>
  );
}

export default Intro;
