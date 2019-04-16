import React, { Component } from 'react';
import './App.css';
import Product from "./Pros";
import Kons from './kons.js';
import Buttons from './ButtonFloats';
import './materialize/css/materialize.min.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

      product: []
    };
  }

  componentDidMount() {
    let api_url = 'https://my-json-server.typicode.com/HerrscherZiel/product_react_api/product';
    fetch(api_url)
          .then(response => response.json())
          .then(data=> {
            this.setState({product : data});
          })
          .catch(function(e) {
            console.log(e);
          })
      }

      hapusBaris = (key) => {
        this.state.product.splice(key, 1);
        this.setState( {product : this.state.product});
      }

      handleSubmit = (e) => {
        e.preventDefault();

        let nama=this.ref.nama.value;
        let harga=this.ref.harga.value;
        let id=this.ref.id.value;

        this.state.product.push({id,nama,harga});
        this.setState({product: this.state.product});

        this.refs.form.reset();

      }

  render() {
    return (
      <div className="App">
          
          <header className="row">
          
            <Buttons isi="This is it"></Buttons>
          
          
          </header>

          {/* <header className="row">
          <div className="sucks">
            <Kons judul="My Life" subs="Sucks" you="you all"/>
            <Kons judul="My Life" subs="Sucks" you="yes you"/>
            <Kons judul="My Life" subs="Sucks" you="especially you"/>       
          </div>
          </header> */}

        <div className="col m12">

          <form ref="form" onSubmit={this.handleSubmit}>
            <input type="text" id="id" placeholder="ID Product"></input>
            <input type="text" id="nama" placeholder="Nama Product"></input>
            <input type="text" id="harga" placeholder="Harga"></input>
            <button type="submit" className="waves-effect waves-light btn">Submit</button>
          </form>

        </div>

         <header className="row">

            <table>

              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Harga</th>
                  <th>Opsi</th>
                </tr>
              </thead>

              <tbody>
                {this.state.product.map((data,key)=>{
                  return(
                    <tr key={data.id}>
                      <td>{data.nama}</td>
                      <td>{data.harga}</td>
                      <td><button onClick={ ()=> this.hapusBaris(key) }className="waves-effect waves-light btn">Delete</button></td>
                    </tr>                    
                    )
                  })}
              </tbody>

            </table>

        </header> 
        
      </div>
    );
  }
}

export default App;
