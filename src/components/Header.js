import { Navbar, Nav, Container,Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="md" className="navbar-dark border border-bottom bg-dark text-white" >
      <Container className="justify-content-center mx-4">
        <Nav className="gap-5">
          <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
          <Nav.Link href="#store"><h5>Store</h5></Nav.Link>
          <Nav.Link href="#about" ><h5>About</h5></Nav.Link>
        </Nav>
      </Container>
        <Button variant="outline-light" className="text-white">Cart 0</Button>
    </Navbar>
  );
};

export default Header;
