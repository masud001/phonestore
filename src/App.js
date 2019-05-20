import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navebars from './components/Navebars';
import ProductList from './components/ProductList';
import Carts from './components/Carts';
import Details from './components/Details';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navebars />
            <Switch>
                <Route path="/" exact component={ProductList}/>
                <Route path="/details" component={Details}/>
                <Route path="/carts" component={Carts}/>
                {/* if URL is not match then it's showes Page NOt Found...! */}
                <Route component={Default}/>
            </Switch>
            
        </React.Fragment>
    );
  }
}

export default App;
