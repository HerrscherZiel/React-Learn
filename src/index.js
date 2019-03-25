import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const element = <h1>Hello World!!</h1>

/*
function getMahasiwa(mahasiwa){
    return 'Nama ' + mahasiwa.nama + ' NIM ' + mahasiwa.nim;
}

function getStatus(mahasiwa){
    if(mahasiwa.angkatan < 2019){
        return 'Mahasiwa baru'
    }
    else{
        return 'Mahasiwa lawas'
    }
}

const mahasiwi = {
    nama : "Lorem Ipsum",
    nim : "111333",
    angkatan : 2018
}

const element = <h1> Hellow, {getMahasiwa(mahasiwi)}, anda adalah {getStatus(mahasiwi)} </h1> 

*/

// function tick(){
//     const element = (
//         <div>
//             <h1>Hellow World</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );

//     ReactDOM.render(/*<App />*/ element  , document.getElementById('root'));
// }

// setInterval(tick,1000); //summon function tick w/ some interval

// function Product(props){
//     return (
//         <div>
//             <h1>{props.judul}</h1><h3>Harga : {props.harga} </h3> 
//         </div>
//     );
// }

// const element = <Product judul="Koleksi Avengers" harga="100000"/>

// ReactDOM.render(element, document.getElementById('root'));

// class Product extends React.Component{
//         render(){
//         return(
//             <div>
//                 <h1>{this.props.judul}</h1><h3>Harga : {this.props.harga} </h3> 
//             </div>
//         )
//     }
// }    

// const element = <Product judul="Koleksi Avengers menggunakan Class Component" harga="100000 menggunakan
//             Class Component"/>

const element = <App/>
    
    ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
