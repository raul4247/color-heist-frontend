import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {


  render() {
    return (
      <div className="main">
        <nav className="grey darken-4">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Color Heist</a>

          </div>
        </nav>
        <br />

        <div className="content container center-align">
          <div className="main-input center-align">
            <label>
              URL:<input className="center-align" type="text" name="url" onChange={this.updateInput} />
            </label>
            <a className="waves-effect waves-light btn light-green accent-4" onClick={this.makeRequest}>Buscar</a>
          </div>
          <br />

          <div>
          </div>
        </div>

        <footer className="page-footer indigo darken-3 ">
        <p className="grey-text text-lighten-3 center-align" >Github: <a href="https://github.com/raul4247">@raul4247</a></p>
        <p className="grey-text text-lighten-3 center-align" >Repositórios: <a href="https://github.com/raul4247/color-heist-frontend">*Frontend</a> <a href="https://github.com/raul4247/ColorHeistBackend">*Backend</a></p>
        </footer>
      </div>
    )
  }
}

export default App