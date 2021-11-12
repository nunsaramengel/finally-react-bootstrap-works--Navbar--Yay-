import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Nav, Navbar, NavDropdown }  from 'react-bootstrap';



function App() {
    return ( 
    <div>
     <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand>
      <img src={logo} width="40px" height="40px" alt="#" />
        Logo
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
         <Nav>
          <NavDropdown title="Products">
            <NavDropdown.Item href="products/tea">Tea</NavDropdown.Item>
            <NavDropdown.Item href="products/coffee">Coffee</NavDropdown.Item>
            <NavDropdown.Item href="products/chocolate">Chocolate</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="products/promotion">Promotion</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="images">Images</Nav.Link>
            <Nav.Link href="about-us">About us</Nav.Link>
            <Nav.Link href="contact-us">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>

     
     </Navbar>
     <div className="content">
      This is a content.
     </div>
    </div>
    );
}

export default App;