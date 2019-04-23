import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './AppBar';
import Card2 from './Card2';

class App2 extends Component {

    constructor() {
        super();

        this.state = {
            // telss
        };
    }


    render() {
        return(
            <div>
                <Navbar/>
                <br/>
                <Button variant="contained" color="secondary">Apple of My Nuts</Button>
                {/* {this.state.telss.map((data,key))} */}
                <Card2/>
            </div>
        )
    }

}

export default App2;