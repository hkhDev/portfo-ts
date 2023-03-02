import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultMovies from "./ResultMovies";
import "./index.scss";

interface IInputField {
  title: string;
  type: string;
  year: string;
}

const baseURL = "https://www.omdbapi.com/?apikey=29b4cbb";

function App() {
  const [movies, setMovies] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputField, setInputField] = useState<IInputField>({
    title: "",
    type: "",
    year: "",
  });
  const [pageNum, setPageNum] = useState<number>(1);

  function callAPIByTitle(
    title: string,
    type: string,
    year: string,
    pageNum: number
  ) {
    setIsLoading(true);
    setPageNum(pageNum);
    // console.log(title);
    axios
      .get(baseURL, {
        params: {
          s: title,
          type: type,
          y: year,
          page: pageNum,
        },
      })
      .then((res) => {
        // console.log(res);
        // console.log("Result: ");
        // console.log(res.data);
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  function pageNumChange(num: number) {
    callAPIByTitle(inputField.title, inputField.type, inputField.year, num);
  }

  function getInputFieldData(title: string, type: string, year: string) {
    setInputField({ title: title, type: type, year: year });
  }

  return (
    <div className="app-body">
      <div className="app-content">
        <Header />
        <div className="app-body">
          <SearchBar
            callAPIByTitle={callAPIByTitle}
            getInputFieldData={getInputFieldData}
          />
          <ResultMovies
            movies={movies}
            isLoading={isLoading}
            pageNumChange={pageNumChange}
            pageNum={pageNum}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
