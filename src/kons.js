import React, { Component} from 'react';
import gambar from './giphy.gif';
import './materialize/css/materialize.min.css';

class Kons extends Component{
    render(){
        return(
            <div  className="col s4">
                <div className="card-panel teal darken-2">
                <p class="flow-text">
                <img src={gambar} className="kons-gambar" alt="gambar"></img>
                <h3>{this.props.judul}</h3> <h4>{this.props.subs}</h4> <h5>Coz of {this.props.you}</h5>
                </p>               
                </div>
            </div>
        )
    }
}

export default Kons;