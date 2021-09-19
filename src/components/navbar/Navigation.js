import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React from 'react'

function Navigation() {
    return (

    <Navbar bg="primary-colour" expand="lg">
      <Navbar.Brand href="#"><div className="navbrand">The YAY Company</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="navlinks mr-auto my-2 my-lg-0">

          <Nav.Link className="navlink" href="#action1">Home</Nav.Link>
          <Nav.Link className="navlink" href="#action2">News</Nav.Link>
          <Nav.Link className="navlink" href="#action2">Contact</Nav.Link>

        </Nav>
        <Form className="searchbar d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button className="gobtn" variant="outline-success">Go</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

    )
}

export default Navigation
