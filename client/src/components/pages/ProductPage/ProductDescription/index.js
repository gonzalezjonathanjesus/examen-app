import React, { Component } from 'react';
import './ProductDescription.css';

class ProductDescription extends Component {

    render() {
        let description = this.props.data.description.replace(/&nbsp;/g, '');
        description = description.replace('\n', '');
        description = description.split('\n').map((item, i) => {
            return (<span key={i}>{item}<br/></span>)
        });
        return (
            <div className="ProductDescription">
                <p>{description}</p>
            </div>
        )
    }
}

export default ProductDescription;