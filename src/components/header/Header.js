import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Header.css";

class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
         <AppBar
          position="fixed"
          style={{
            "background-color": "#B72B2B",
          }}>
          <Toolbar className="app-header">
            <Link className="app-menu__link" to="/">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text"
                onClick={this.home}              >
                Home
              </Button>
            </Link>
            <Link className="app-menu__link" to="/Info">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text">
                Info
              </Button>
            </Link>
            <Link className="app-menu__link" to="/Faltas">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text">
                Qtd. Faltas
              </Button>
            </Link>
            <Link className="app-menu__link" to="/Calendario">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text">
                Calendario
              </Button>
            </Link>
            <Link className="app-menu__link" to="/Grupos">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="app-header_text">
                Grupos
              </Button>
            </Link>    
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
export default Header;