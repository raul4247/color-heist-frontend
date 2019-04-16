import React, { Component } from 'react'
import axios from 'axios'
import ColorShowing from './components/ColorShowing'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { url: '', status: '', title: '', rgb_colors: [], rgba_colors: [] }

    this.updateInput = this.updateInput.bind(this)
    this.makeRequest = this.makeRequest.bind(this)
  }

  updateInfo(data) {
    this.setState({ status: data.status, title: data.title, rgb_colors: data.rgb_colors, rgba_colors: data.rgba_colors })
    console.log(this.state)

  }

  updateInput(event) {
    let url = event.target.value
    if (!/^https?:\/\//i.test(url))
      url = 'http://' + url;
    this.setState({ url: url })
  }

  makeRequest(event) {
    const backend = 'https://color-heist.herokuapp.com/index.php?url='

    axios.get(backend + this.state.url)
      .then(response => this.updateInfo(response.data))
  }

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
          <div>
            <h4>Pegue uma paleta de cores!</h4>
            <p>Entre com uma url válida de um site para obter as cores utizadas!</p>
          </div>
          <br />
          <div className="main-input center-align">
            <label>
              URL:<input className="center-align" type="text" name="url" onChange={this.updateInput} />
            </label>
            <a className="waves-effect waves-light btn light-green accent-4" onClick={this.makeRequest}>Buscar</a>
          </div>
          <br />

          <div>
            {this.state.status != '' && <ColorShowing serverInfo={this.state} />}
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