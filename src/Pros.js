import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component{
    render(){
    return(
        
        <div className="col s6 m3">
            <div className="card-panel blue lighten-2">
                <img src={logo} className="App-logo" alt="logo"></img>
                <p class="flow-text"><blockquote>{this.props.judul}</blockquote>Harga : {this.props.harga} </p>
            </div> 
        </div>
    );
}
}

export default Product;