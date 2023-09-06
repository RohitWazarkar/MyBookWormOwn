import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import EbookSearch from './EbookSearch';
import { Dropdown } from 'react-bootstrap';

function NormalNavbar() {

 
  return (
    <Navbar expand="lg" className="bg-secondary " variant="dark"  style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'right', padding: '1rem' }}>
    <Container>
    <Navbar.Brand href="/Home">
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <h2>BookWorm</h2>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto mx-5">
          <Nav.Link href="/Product">Product</Nav.Link>
          <>
          <div  style={{align:'center'}} >
   
  
  </div>
          </>
          <Nav.Link href="/Feedback">Feedback</Nav.Link>  

        

          <Dropdown>
    <Dropdown.Toggle variant="light mx-2" id="dropdown-basic">
      Products
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="./Ebook">Ebook</Dropdown.Item>
      <Dropdown.Item href="./Music">Music</Dropdown.Item>
      <Dropdown.Item href="./Videos">Videos</Dropdown.Item>
      <Dropdown.Item href="./EbookSearch">EbookSearch</Dropdown.Item>
      <Dropdown.Item href="*">ErrorPage</Dropdown.Item>
      <Dropdown.Item href="./Gateway">Gateway Page</Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown>
          
  <a href='/Login'><button type="button" class="btn btn-primary btn-rounded  mx-3"  id="button"  value=" ">Login</button></a>

            {/* <LoginButton/> */}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NormalNavbar;
