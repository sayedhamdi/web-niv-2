import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap"
import StyledLink from '../components/StyledLink'

export default function Navigation(){
	return (
		<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <StyledLink  to="/">Home</StyledLink>
        <StyledLink  to="/about">About</StyledLink>

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href=".1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
	)
}
