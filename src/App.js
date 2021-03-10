import React, { Component } from 'react';
import Create from './components/Create';
import Home from './components/Home';
import About from './components/About';
import Wudya from './components/Wudya';
import WudyaResults from './components/WudyaResults';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Wudya</NavbarBrand>
          <Nav className="me-uato" navbar>
            <NavItem>
              <NavLink href="/create">Create</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Random</NavLink>
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
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
