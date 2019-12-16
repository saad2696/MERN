import React, { Component } from 'react';
//import logo from './logo.svg';
import {Switch,Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'; //components of navbar imported 
import Cart from './components/Cart'; //components of cart imported 
import Default from './components/Default'; //components of Default imported 
import ProductList from './components/ProductList'; //components of Product List imported 
import  Details  from './components/Details'; //components of Deatils imported 



class App extends Component {
  
  render() { 
    return ( 
      <React.Fragment>
       <Navbar/>
       <Switch>
        <Route exact path="/" component={ProductList} /> 
         <Route path="/details" component={Details} />
         <Route path="/cart" component={Cart} />
         <Route  component={Default} />
         
         </Switch>
      
    
      </React.Fragment>
     );
  }
}
 
export default App;
