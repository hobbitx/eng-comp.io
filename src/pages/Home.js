import * as React from "react";
import Header from "../components/header";
import Conteudo from "../components/conteudo";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grupos from "./Grupos";
import Info from "./Info";
import Calendario from "./Calendario";
import Faltas from "./Faltas";


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

class Home extends React.Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Conteudo>
            <Routes>
              <Route path="/Grupos" element={<Grupos/>} />
              <Route path="/Info" element={<Info/>} />
              <Route path="/Calendario" element={<Calendario/>} />
              <Route path="/Faltas" element={<Faltas/>} />
              
            </Routes>
          </Conteudo>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

//  <Route path="/Agendamento"  component={Agendamento} />
export default Home;