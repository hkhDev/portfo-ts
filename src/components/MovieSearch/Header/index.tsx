import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./index.scss";

function Header() {
  return (
    <Navbar>
      <Container>
        <h2>MOVIE SEARCH</h2>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/Harris-portfo">
              More Apps <i className="fas fa-angle-double-right"></i>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
