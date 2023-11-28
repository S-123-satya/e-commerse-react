import { useContext } from "react";
import { Navbar, Nav, Container,Button, Badge } from "react-bootstrap";
import CartContext from "../Store/cart-context";

const Header = () => {
  const cartCtx=useContext(CartContext);
  return (
    <Navbar expand="md" className="navbar-dark border-2 border-bottom bg-dark text-white" >
      <Container className="justify-content-center">
        <Nav className="gap-5">
          <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
          <Nav.Link href="#store"><h5>Store</h5></Nav.Link>
          <Nav.Link href="#about" ><h5>About</h5></Nav.Link>
        </Nav>
      </Container>
        <Button variant="outline-light" data-bs-theme="dark" className="text-white  me-2" onClick={cartCtx.toggleCart}>Cart 0</Button>
    </Navbar>
  );
};

export default Header;
