import Logo from "./Logo";
import "./index.scss";

function Production() {
  return (
    <div className="production">
      <Logo img="disney.png" name="disney-logo" />
      <Logo img="marvel.png" name="marvel-logo" />
      <Logo img="paramount.png" name="paramount-logo" />
    </div>
  );
}

export default Production;
