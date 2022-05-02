import Header from "./Header";
import Intro from "./Intro";
import Ironman from "./Ironman";
import Avengers from "./Avengers";
import Production from "./Production";
import FuturePlanning from "./FuturePlanning";
import "./index.scss";

function Marvel() {
  return (
    <div className="marvel-body">
      <Header />
      <Intro />
      <Ironman />
      <Avengers />
      <Production />
      <FuturePlanning />
    </div>
  );
}

export default Marvel;
