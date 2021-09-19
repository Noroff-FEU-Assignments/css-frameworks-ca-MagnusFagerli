import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./sass/style.scss";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Home from "./components/homepage/Home"

function App() {
  return (
    <Router>
      <div>
      <Navbar bg="primary-colour" expand="lg">
      <Navbar.Brand href="#"><div className="navbrand">The YAY Company</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact to="" className="navlink">
                                Home
                            </NavLink>
                            <NavLink to="/news" className="navlink">
                                News
                            </NavLink>
                            <NavLink to="/contact" className="navlink">
                                Contact
                            </NavLink>
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
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
      </div>
    </Router>

  );
}

export default App;
