import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/Harris-portfo" element={<Home />} />
          <Route path="/Harris-portfo/marvel" element={<Marvel />} />
          <Route path="/Harris-portfo/mymemo" element={<MyMemo />} />
          <Route path="/Harris-portfo/todolist" element={<ToDoList />} />
          <Route path="/Harris-portfo/moviesearch" element={<MovieSearch />} />
          <Route path="/Harris-portfo/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
