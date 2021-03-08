import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Wudya</NavbarBrand>
          <Nav className="me-uato" navbar>
            <NavItem>
              <NavLink>Create</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Random</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Gauntlet</NavLink>
            </NavItem>
          </Nav>
          <NavLink>About</NavLink>
        </Navbar>
        <Create />
      </Fragment>
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
