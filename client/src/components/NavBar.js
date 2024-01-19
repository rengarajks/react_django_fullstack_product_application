import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg='light' expand="lg">
        <Navbar.Brand href="/">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link className='navbtns' href="/">Products</Nav.Link>
            <Nav.Link className='navbtns' href="/add">Add Product</Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default NavBar;