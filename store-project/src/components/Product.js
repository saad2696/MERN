import React, { Component } from 'react'
import styled from 'styled-components'
import {link} from 'react-dom' //for linking pages
import {productConsumer} from '../context'  //data is served from here
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const {id,title, img ,price ,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
           <div>
               <div className="container">
                   <div classname="img-container p-5" onClick={()=>console.log('you clicked the product')}>
                   <Link to="/Details">
                     <img src={img} alt="product" className="card-img-top" />
                   </Link>
                   <button 
                   className="cart-btn" 
                   disabled={inCart? true : 
                    false} onClick={()=>{
                        console.log('added to cart');
                    }}
                    >
                        
                        {inCart? (
                        <p className="text-capitalize mb-0" disabled>
                            {" "}
                            In Cart
                            </p>
                            ) : (
                            <i className="fas fa-cart-arrow-down"/>
                            )}
                    
                   
                </button>
                {/* Addding transition for add to cart button */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                        </p>
                        <h5 className=" align-self-auto text-blue font-bold mb-0 ml-2">
                        <span className="mr-1"> Rs </span>
                         {price}
                        </h5>
                        
                        

                </div>
                       
                   </div>
               </div>
           </div>
            </ProductWrapper>
            
        )
    }
}
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear; 
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;  
}
&:hover{
    
        border: 0.04rem solid rgba(0,0,0,0.15);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0,0.2);
  
    .card-footer{
        background:rgba(247,247,247);
    }
}

.img-container{
    position: relative ; 
    overflow : hidden;

}
.card-img-top{
    transition: all 0.5s linear; 
}
.img-container:hover .card-img-top{
transform: scale(1.2);
}
`