import React, { Component } from 'react'
import './ColorShowing.css'
import { FontColor, nameColorHEX } from '../services/colorHelper.js'

class ColorShowing extends Component {
    render() {
        return (
            <div>
                <div className="row center hide-on-small-only">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                {this.props.serverInfo.rgb_colors.length == 0 && this.props.serverInfo.status == 'ok' && <span className="card-title"> Não foi encontrado nenhum código rgb!</span>}
                                {this.props.serverInfo.rgb_colors.length > 0 &&  <span className="card-title"> {this.props.serverInfo.title}</span>}
                                {this.props.serverInfo.status == 'error' && <span className="card-title">URL inválida!</span>}
                            </div>
                            <div className="card-action">
                                <ul>
                                    {this.props.serverInfo.rgb_colors.map(function (color, index) {
                                        return <li className="color-item" key={color} style={{ backgroundColor: color, color: FontColor(color) }}><p className="color-hex left-align">{color}</p> <p className="color-name right-align">{nameColorHEX(color)}</p></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center hide-on-med-and-up">
                    <div className="content">
                        {this.props.serverInfo.rgb_colors.length == 0 && this.props.serverInfo.status == 'ok' && <span className="card-title"> Não foi encontrado nenhum código rgb!</span>}
                        {this.props.serverInfo.rgb_colors.length > 0 &&  <span className="card-title"> {this.props.serverInfo.title}</span>}
                        {this.props.serverInfo.status == 'error' && <span className="card-title">URL inválida!</span>}
                        <ul>
                            {this.props.serverInfo.rgb_colors.map(function (color, index) {
                                return <li className="color-item" key={color} style={{ backgroundColor: color, color: FontColor(color) }}><p className="color-hex left-align">{color}</p> <p className="color-name right-align">{nameColorHEX(color)}</p></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorShowing