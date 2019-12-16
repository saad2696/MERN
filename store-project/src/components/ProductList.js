import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
//import axios from "axios";
import {ProductConsumer} from '../context'


export default class ProductList extends Component {
    

/*componentDidMount=()=>{
    this.getProductData();
}*/

/*displayProducts=(posts)=>{
   if(!posts) return null
   console.log('i am called');
  

  return posts.map((posts,index)=>(
      <div className="row" key={posts}>
    <div className="col-sm-6">
    <div className="card">
    <img className="card-img-top" src={posts.img} alt="ok"/>
    <div className="card-body">
  <h5 className="card-title"> {posts.title}</h5>
  <p className="card-text">Rs.{posts.price}/-</p>
    </div>
          </div>
   
  </div>
      </div>
 
   ));
   
}*/
/* getProductData= ()=> {
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
 }*/
    render() {
        return (
            <div className="py-15 text-align-center width-30px">
                <div className="container">
                    <div className="row" id="title">
                        <Title name="Products in" title="Store"/>
                    </div>
    
                </div>
            <div className="container">
            <div className="row">
                <ProductConsumer>
                {value=>{
                return value.products.map(product=> {
                //looping through data array
                return <Product
                key={product.id} product={product}/>

               
                  
                })
           }}

                </ProductConsumer>
          
            </div>
            </div>
                
            </div>
           
        );
    }
}
//{this.displayProducts(this.state.posts)} 