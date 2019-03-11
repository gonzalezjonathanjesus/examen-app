import React, { Component } from 'react';
import './ProductPhoto.css';

class ProductPhoto extends Component {

    render() {
        return (
            <div className="ProductPhoto">
                <img src={this.props.data.productimage} alt={this.props.data.productname}/>
            </div>
        )
    }
}

export default ProductPhoto;