import React, { Component } from 'react';
import './App.css';
import './materialize/css/materialize.min.css';
import gambar from'./images/giphy.gif';


class Buttons extends Component{
    render(){
    return(
        
        <div className="col s12 m10">
            <div className="card-panel grey">
                <div className="row valign-wrapper">

                    <div className="col s2">
                        <img src={gambar} alt="" class="circle responsive-img"></img>
                    </div>

                    <div className="col s8">
                        <p className="flow-text">{this.props.isi}</p>
                    </div>

                </div>
            </div>
        </div>

    );

}
}

export default Buttons;