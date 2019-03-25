import React, { Component} from 'react';
import gambar from './giphy.gif';

class Kons extends Component{
    render(){
        return(
            <div>
                <img src={gambar} className="kons-gambar" alt="gambar"></img>
                <h3>{this.props.judul}</h3> <h4>{this.props.subs}</h4> <h5>Coz of {this.props.you}</h5>
            </div>
        )
    }
}

export default Kons;