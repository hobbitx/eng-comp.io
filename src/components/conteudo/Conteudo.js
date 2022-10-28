import * as React from "react";
import "./Conteudo.css";

class Conteudo extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        <main className="app-container" style={{ width: "100%" }}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Conteudo;