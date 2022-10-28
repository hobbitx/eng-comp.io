import * as React from "react";
import { marked } from 'marked'

class Grupos extends React.Component {
    constructor() {
      super();
      this.state= {
        markdown: ""
      }
    }
    componentDidMount() {
        const readmePath = require("../arquivos/grupos.md");
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }
    render() {
        const { markdown } = this.state;
        return (
            <React.Fragment>
                <section>
                    <article dangerouslySetInnerHTML={{__html: markdown}}></article>
                </section>
            </React.Fragment>
      );
    }
  }
  export default Grupos;