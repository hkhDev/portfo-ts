import { Container, Row } from "react-bootstrap";
import Movies from "./Movies";
import moviesList from "./moviesList";

import "./index.scss";

function FuturePlanning() {
  return (
    <div id="futurePlanning">
      <Container>
        <h2>MCU Future Planning</h2>
        <Row>
          {moviesList.map((movie, index) => (
            <Movies
              key={index}
              name={movie.name}
              img={movie.img}
              imgName={movie.imgName}
              date={movie.date}
              link={movie.link}
              variant={movie.showing ? "primary" : "outline-danger"}
              buttonName={movie.showing ? "Get tickets" : "Trailer"}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FuturePlanning;
