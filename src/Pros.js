import React, { Component } from 'react';

class Product extends React.Component{
    render(){
    return(
        <div>
            <h1>{this.props.judul}</h1><h3>Harga : {this.props.harga} </h3> 
        </div>
    );
}
}

export default Product;