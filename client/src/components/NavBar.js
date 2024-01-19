import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg='light' expand="lg">
        <Navbar.Brand href="/">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <NavLink className='navbtns' href="/">Products</NavLink>
            <NavLink className='navbtns' href="/add">Add Product</NavLink>
          </Nav>
    </Navbar>
  );
}

export default NavBar;