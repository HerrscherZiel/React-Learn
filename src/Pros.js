import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './materialize/css/materialize.min.css';
import bawang from './images/bawang.gif';


class Product extends Component{
    render(){
    return(
        
        <div className="col s3">
            <div className="card-panel blue lighten-2">

                <div className="circle responsive-img">
                <img src={bawang} class="circle responsive-img" alt="logo"></img>
                </div>
                <p class="flow-text"><blockquote>{this.props.nama}</blockquote>Harga : {this.props.harga} </p>                
                <br></br>
                <div className="card-action">
                <button className="waves-effect waves-light btn">
                <a onClick ={this.props.hapusCard} id ={this.props.id} href="#">Delete</a>
                </button>
                </div>
                </div> 
        </div>
    );
}
}

export default Product;