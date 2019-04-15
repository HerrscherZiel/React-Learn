import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Pros";
import Kons from './kons.js';
import Buttons from './ButtonFloats';
import './materialize/css/materialize.min.css';

// import '.materialize/css/materialize.css';
// import '.materialize/js/materialize.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <div className="ndas-ndas">

            <div className="iklan">
            <h1>Promo</h1>
            <img src={logo} className="App-logo" alt="logo"></img></div>

            <div className="bayar">
            <h1>Pembayaran</h1>
            <img src={logo} className="App-logo" alt="logo"></img></div>

          </div> */}

          <header className="row">
          
            <Buttons isi="This is it"></Buttons>
          
          
          </header>

          <header className="row">
          <div className="sucks">
            <Kons judul="My Life" subs="Sucks" you="you all"/>
            <Kons judul="My Life" subs="Sucks" you="yes you"/>
            <Kons judul="My Life" subs="Sucks" you="especially you"/>       
          </div>
          </header>

         <header className="row">
          
          <Product judul="Power Bank" harga="100.000"/>
          <Product judul="Power Bank" harga="100.000"/>
          <Product judul="Power Bank" harga="100.000"/>
          <Product judul="Power Bank" harga="100.000"/>
          
        </header> 
        
      </div>
    );
  }
}

export default App;
