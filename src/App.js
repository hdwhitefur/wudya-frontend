import React, { useState, useEffect } from 'react';
import Create from './components/Create';
import Home from './components/Home';
import About from './components/About';
import Wudya from './components/Wudya';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const App = (props) => {
  const [random, setRandom] = useState("");

  useEffect(() => {
    getRandomWudya();
  }, [])

  const getRandomWudya = () => {
    axios.get("/api/optionpairs/get_random").then((res) => {
      setRandom(res.data.id);
    }).catch((err) => console.log(err));
  }

  return (
    <Router>

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Wudya</NavbarBrand>
        <Nav className="me-uato" navbar>
          <NavItem>
            <NavLink href="/create">Create</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={`/wudya/${random}`}>Random</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Gauntlet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/wudya/:id">
          <Wudya />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  )
}

export default App;
