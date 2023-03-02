import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <div>
      <Navbar className="marvel-navbar" variant="dark" expand="xl">
        <Container>
          <Navbar.Brand>Harris</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#ironman">Iron Man</Nav.Link>
              <Nav.Link href="#avengers">Avengers</Nav.Link>
              <Nav.Link href="#futurePlanning">Future Planning</Nav.Link>
              <NavDropdown title="Mini Game" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="mini_game/avengers_assemble/index.html"
                  target="_blank"
                >
                  Avengers Assemble
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="mini_game/defect_ulton/index.html"
                  target="_blank"
                >
                  Defect Ultron
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/">More Apps</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
