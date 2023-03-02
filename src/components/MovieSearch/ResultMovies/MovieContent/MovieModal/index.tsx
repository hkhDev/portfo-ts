import { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Table } from "react-bootstrap";
import "./index.scss";

interface IProps {
  show: boolean;
  movie: any;
  onHide: () => void;
}

const ratingList = ["Internet Movie Database", "Rotten Tomatoes", "Metacritic"];
const ratingListLogo = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png?20200406194337",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/691px-Rotten_Tomatoes_logo.svg.png?20180706024528",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/88px-Metacritic.svg.png?20150314054830",
];
// const windowWidth = window.outerWidth;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    // console.log(size);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function renderRating(movieRatings: any) {
  return (
    <Col xl={4}>
      <Table borderless>
        <tbody>
          {movieRatings !== undefined && (
            <>
              <tr>
                {movieRatings.map(
                  (rate: { Source: string; Value: String }, index: number) => (
                    <td className="rating-icon-td" key={index}>
                      <img
                        className="rating-icon"
                        src={ratingListLogo[ratingList.indexOf(rate.Source)]}
                      />
                    </td>
                  )
                )}
              </tr>
              <tr>
                {movieRatings.map(
                  (rate: { Source: string; Value: String }, index: number) => (
                    <td className="rating-value" key={index}>
                      <strong>{rate.Value}</strong>
                    </td>
                  )
                )}
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </Col>
  );
}

function MovieModal(props: IProps) {
  const [width, height] = useWindowSize();
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Container>
          <Row>
            <Col xl={8}>
              <Modal.Title id="contained-modal-title-vcenter">
                <h1>{props.movie.Title}</h1>
              </Modal.Title>
              {props.movie.Year +
                "  |  " +
                props.movie.Rated +
                (props.movie.Runtime !== "N/A"
                  ? "  |  " + props.movie.Runtime
                  : "")}
            </Col>
            {width >= 1200 && renderRating(props.movie.Ratings)}
          </Row>
          <Row>
            <Col xl={4} lg={6}>
              <img
                src={
                  props.movie.Poster === "N/A"
                    ? "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"
                    : props.movie.Poster
                }
                alt="Poster"
                className={width < 992 ? "movie-poster-center" : "movie-poster"}
              />
            </Col>
            <Col xl={8} lg={6}>
              <Table borderless>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <strong>{props.movie.Plot}</strong>
                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Director</strong>
                    </td>
                    <td>{props.movie.Director}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Writer</strong>
                    </td>
                    <td>{props.movie.Writer}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Actors</strong>
                    </td>
                    <td>{props.movie.Actors}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language</strong>
                    </td>
                    <td>{props.movie.Language}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Awards</strong>
                    </td>
                    <td>{props.movie.Awards}</td>
                  </tr>
                </tbody>
              </Table>
              {width < 1200 && renderRating(props.movie.Ratings)}
              {/* <p></p>
              <p>{"Director: " + props.movie.Director}</p>
              <p>{"Writer: " + props.movie.Writer}</p>
              <p>{"Actors: " + props.movie.Actors}</p> */}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;
