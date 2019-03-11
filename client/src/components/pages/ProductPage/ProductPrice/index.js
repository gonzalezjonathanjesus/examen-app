import React, { Component } from 'react';
import './ProductPrice.css';

class ProductPrice extends Component {
    render() {
        return (
            <div className="ProductPrice">
                <span>${this.props.data.originalprice} </span>
                <span>${this.props.data.discountprice}</span>
            </div>
            );
    };
}

export default ProductPrice;