import React, { Component } from 'react';
import './ProductDetails.css';

class ProductDetails extends Component {

    render() {

        return (
            <div className="ProductDescription">
                <ul>
                    <li><span>SKU</span><span>{this.props.data.sku}</span></li>
                    <li><span>Color</span><span>{this.props.data.color}</span></li>
                    <li><span>Season</span><span>{this.props.data.season}</span></li>
                </ul>
            </div>
        )
    }
}

export default ProductDetails;