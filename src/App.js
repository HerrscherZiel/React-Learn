import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Pros";
import Kons from './kons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="ndas-ndas">

            <div className="iklan">
            <h1>Promo</h1>
            <img src={logo} className="App-logo" alt="logo"></img></div>

            <div className="bayar">
            <h1>Pembayaran</h1>
            <img src={logo} className="App-logo" alt="logo"></img></div>

          </div>

          <div className="sucks">
            <div className="none"><Kons judul="My Life" subs="Sucks" you="you all"/> </div>
            <div className="none"><Kons judul="My Life" subs="Sucks" you="yes you"/> </div>
            <div className="none"><Kons judul="My Life" subs="Sucks" you="especially you"/> </div>         
          </div>

         <header className="App-header">
          <div className="kotak"><Product judul="Power Bank" harga="100.000"/></div>
          <div className="kotak"><Product judul="Power Bank" harga="100.000"/></div>
          <div className="kotak"><Product judul="Power Bank" harga="100.000"/></div>
          <div className="kotak"><Product judul="Power Bank" harga="100.000"/></div>
        </header> 
        
      </div>
    );
  }
}

export default App;
