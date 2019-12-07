import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'

export default class ProductList extends Component {
    state={
        products:[]
    }
    render() {
        return (
            <div className="py-15 text-align-center width-30px">
                <div class="container">
                    .<div class="row" id="title">
                        <Title name="Products in" title="Store"/>
                    </div>
    
                </div>
            </div>
          
        )
    }
}
