import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./index.scss";

function Header() {
  return (
    <div>
      <Navbar className="navbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">KaHo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#ironman">Iron Man</Nav.Link>
              <Nav.Link href="#avengers">Avengers</Nav.Link>
              <Nav.Link href="#futurePlanning">Future Planning</Nav.Link>
              <NavDropdown title="Mini Game" id="basic-nav-dropdown">
                <NavDropdown.Item href="mini_game/avengers_assemble/index.html">
                  Avengers Assemble
                </NavDropdown.Item>
                <NavDropdown.Item href="mini_game/defect_ulton/index.html">
                  Defect Ultron
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled>Coming soon</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
