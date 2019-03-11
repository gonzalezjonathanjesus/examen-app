import React, { Component } from 'react';
import './ProductInfo.css';

class ProductInfo extends Component {

    render() {
        return (
            <div className="ProductInfo">
                <p className="text brand">{this.props.data.brand}</p>
                <p className="text productName">{this.props.data.productname}</p>
                <p className="text productSeller">Vendido y entregado:  <span className="sellerName">{this.props.data.seller}</span></p>
            </div>
        )
    }
}

export default ProductInfo;