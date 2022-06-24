import { useState } from "react";
import axios from "axios";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import MovieModal from "./MovieModal";

interface IProp {
  movie: any;
}

function MovieContent(props: IProp) {
  const [movie, setMovie] = useState<any>({});
  const [modalShow, setModalShow] = useState<boolean>(false);
  const baseURL = "https://www.omdbapi.com/?apikey=29b4cbb";

  function callAPIById(id: string) {
    // console.log(title);
    // setApiError(false);
    axios
      .get(baseURL, {
        params: {
          i: id,
        },
      })
      .then((res) => {
        console.log(res);
        setMovie(res.data);
        setModalShow(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClick() {
    callAPIById(props.movie.imdbID);
  }

  return (
    <div className="movie-body">
      <img
        src={
          props.movie.Poster === "N/A"
            ? "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"
            : props.movie.Poster
        }
        alt="Poster"
        className="movie-poster"
      />
      <div>
        <h3>{props.movie.Title}</h3>
        <div>{"Year of release: " + props.movie.Year}</div>
        <br />

        <Button variant="outline-danger" onClick={handleClick}>
          More Info
        </Button>

        {/* <Button variant="outline-danger" onClick={handleClick}>
          More Info
        </Button> */}
        <MovieModal
          show={modalShow}
          movie={movie}
          onHide={() => setModalShow(false)}
        ></MovieModal>
      </div>
    </div>
  );
}

export default MovieContent;
