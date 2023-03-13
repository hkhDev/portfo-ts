import { Spinner, Pagination } from "react-bootstrap";
import "./index.scss";
import MovieContent from "./MovieContent";

interface IProp {
  movies: any;
  isLoading: boolean;
  pageNumChange: (pageNum: number) => void;
  pageNum: number;
}

function ResultMovies(props: IProp) {
  const totalPage = Math.ceil(props.movies.totalResults / 10);

  function pageButtonClick(num: number) {
    console.log(num);
    props.pageNumChange(num);
  }
  return (
    <>
      {props.isLoading ? (
        <div className="movie-body">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : props.movies !== "" && props.movies.Response === "True" ? (
        <>
          {props.movies.Search.map((movie: any, index: number) => (
            <MovieContent key={index} movie={movie} />
          ))}

          <div className="page-number">
            <Pagination className="pagination">
              {props.pageNum > 1 ? (
                <>
                  <Pagination.First onClick={() => pageButtonClick(1)} />
                  <Pagination.Prev
                    onClick={() => pageButtonClick(props.pageNum - 1)}
                  />
                </>
              ) : (
                <>
                  <Pagination.First disabled />
                  <Pagination.Prev disabled />
                </>
              )}
              <Pagination.Item>
                {props.pageNum} / {totalPage}
              </Pagination.Item>
              {props.pageNum < totalPage ? (
                <>
                  <Pagination.Next
                    onClick={() => pageButtonClick(props.pageNum + 1)}
                  />
                  <Pagination.Last onClick={() => pageButtonClick(totalPage)} />
                </>
              ) : (
                <>
                  <Pagination.Next disabled />
                  <Pagination.Last disabled />
                </>
              )}
            </Pagination>
            {/* <input type="number" className="page-input" value={1} /> /{" "}
            {Math.ceil(props.movies.totalResults / 10)} */}
          </div>
        </>
      ) : (
        <h2 className="movie-body">{props.movies.Error}</h2>
      )}
    </>
  );
}

export default ResultMovies;
