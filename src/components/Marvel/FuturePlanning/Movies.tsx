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
    <>
      <Col lg="1"></Col>
      <Col lg="4" className="futurePlanning-col">
        <Card>
          <Card.Header className="futurePlanning-text">
            {props.name}
          </Card.Header>
          <Card.Img
            variant="top"
            className="movie-poster"
            src={props.img}
            alt={props.imgName}
          />
          <Card.Body>
            <Card.Title className="futurePlanning-text">
              {props.date}
            </Card.Title>
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
      </Col>
      <Col lg="1"></Col>
    </>
  );
}

export default Movies;
