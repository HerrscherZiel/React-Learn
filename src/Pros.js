import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './materialize/css/materialize.min.css';


class Product extends Component{
    render(){
    return(
        
        <div className="col s3">
            <div className="card-panel blue lighten-2">

                <div className="center-align">
                <img src={logo} className="App-logo" alt="logo"></img>
                </div>

                <p class="flow-text"><blockquote>{this.props.judul}</blockquote>Harga : {this.props.harga} </p>                
            </div> 
        </div>
    );
}
}

export default Product;