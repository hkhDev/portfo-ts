import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Marvel from "./Marvel";
import MyMemo from "./MyMemo";
import ToDoList from "./ToDoList";
import MovieSearch from "./MovieSearch";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/mymemo" element={<MyMemo />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/moviesearch" element={<MovieSearch />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
