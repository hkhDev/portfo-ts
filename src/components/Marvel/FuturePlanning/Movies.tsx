import { Card, Col, Button } from "react-bootstrap";

interface IProp {
  name: string;
  img: string;
  imgName: string;
  date: string;
  link: string;
  variant: string;
  buttonName: string;
}

function Movies(props: IProp) {
  return (
    <Col lg="4" className="futurePlanning-col">
      <Card>
        <Card.Header className="futurePlanning-text">{props.name}</Card.Header>
        <Card.Img
          variant="top"
          className="movie-poster"
          src={props.img}
          alt={props.imgName}
        />
        <Card.Body>
          <Card.Title className="futurePlanning-text">{props.date}</Card.Title>
          <div className="d-grid gap-2">
            <Button
              className="futurePlanning-button"
              variant={props.variant}
              href={props.link}
              target="_blank"
            >
              {props.buttonName}
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/* <div className="card">
        <div className="card-header">
          <h3 className="card-title">{props.name}</h3>
        </div>
        <div className="card-body">
          <img className="movie-poster" src={props.img} alt={props.imgName} />
          <h3>{props.date}</h3>
          <div className="d-grid gap-2">
            <a
              href={props.link}
              className={props.className}
              target="_blank"
              rel="noreferrer"
            >
              {props.buttonName}
            </a>
          </div>
        </div>
      </div> */}
    </Col>
  );
}

export default Movies;
