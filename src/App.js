import React, { Component } from 'react';
import './App.css';
import Product from "./Pros";
import Kons from './kons.js';
import Buttons from './ButtonFloats';
import './materialize/css/materialize.min.css';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import'./maps.js';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

class App extends Component {

  constructor() {
    super();
    this.state = {

      product: [{ 
        nama : 'Lorem Ipsum',
        harga: '10.0000',
        id: 100

      },
      {
        nama : 'Lorem Ipsum',
        harga: '20.0000',
        id: 50

      },
      {
        nama : 'Lorem Ipsum',
        harga: '30.0000',
        id: 25

      },
      {
        nama : 'Lorem Ipsum',
        harga: '60.0000',
        id: 5

      }
    
    ],
      
      delete_clicked : 0
      
      };
  }

  // componentDidMount() {
  //   let api_url = 'https://my-json-server.typicode.com/HerrscherZiel/product_react_api/product';
  //   fetch(api_url)
  //         .then(response => response.json())
  //         .then(data=> {
  //           this.setState({product : data});
  //         })
  //         .catch(function(e) {
  //           console.log(e);
  //         })
  //     }

      hapusCard = (key) => {
        this.state.delete_clicked = !this.state.delete_clicked;
        this.setState ({delete_clicked : this.state.delete_clicked});
        this.state.product.splice(key.target.id,1);
        this.setState({product : this.state.product});
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

      componentDidUpdate(prevProps, prevState, snapshot) {

      }
      
  render() {

    return (
      
      <div className="App">
          
          <header className="row">
          
            <Buttons isi="This is it"></Buttons>
          
          
          </header>
      

          <header className="row">
      <div className="col s12">

        <div className="col s6">

          <form ref="form" onSubmit={this.handleSubmit}>
            <input type="text" ref="id" placeholder="ID Product"></input>
            <input type="text" ref="nama" placeholder="Nama Product"></input>
            <input type="text" ref="harga" placeholder="Harga"></input>
            <button type="submit" className="waves-effect waves-light btn">Submit</button>
          </form>

        </div>

        <div className="col s6">
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWQLKlQCRRKJ2peEbGoxzPMzruN8EiReo&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>

      </div>

      </header>

         <header className="row">

            <table>

              {/* <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Harga</th>
                  <th>Opsi</th>
                </tr>
              </thead> */}

              <tbody>
                {this.state.product.map((data,key)=>{
                  return(
                    // <tr key={data.id}>
                    //   <td>{data.nama}</td>
                    //   <td>{data.harga}</td>
                    //   <td><button onClick={ ()=> this.hapusBaris(key) }className="waves-effect waves-light btn">Delete</button></td>
                    // </tr>        
                    
                    <Product hapusCard={this.hapusCard} harga={data.harga} nama={data.nama} key={key} id={key}/>
                    // <Product nama = {data.nama} harga = {data.harga}> hapusCard = {this.hapusCard} key = {key} id = {key} </Product>            
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
