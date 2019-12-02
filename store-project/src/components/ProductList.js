import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product/>
                <h3>yes you making call here to Product</h3>
            </div>
        )
    }
}
