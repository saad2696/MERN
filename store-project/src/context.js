import React, { Component } from 'react';
//import axios from "axios";
import {storeProducts,detailProduct} from './data'

const  ProductContext = React.createContext();
class ProductProvider  extends Component {
    state={
    products: storeProducts,
    detailProduct : detailProduct
    }
     handleDetails=()=>{
         console.log('hello from handle details')
     }
     addtocart=()=>{
     console.log('Hello From Add to cart')
     };
     /*getProductData= ()=> {
        axios.get(' http://localhost:4000/post')
        .then((response)=>{
            const data =response.data;
            this.setState({posts: data})
            console.log("data has been recieved")
            console.log(response.data);
             })
        .catch(()=>{
           alert('error!')
        })
        
     }
     componentDidMount=()=>{
        this.getProductData();
    }*/
    render() { 
        return ( 
             //destructuring 
            <ProductContext.Provider value={{
           ...this.state,
           handleDetails: this.handleDetails,
           addtocart: this.addtocart

                
            }}>
                {this.props.children}
               
                </ProductContext.Provider>
         );
    }
}
 
const ProductConsumer = ProductContext.Consumer; 
export {ProductProvider,ProductConsumer}