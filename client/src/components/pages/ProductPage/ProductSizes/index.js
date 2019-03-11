import React, { Component } from 'react';
import './ProductSizes.css';

class ProductSizes extends Component {

    render() {

        let { sizes } = this.props.data;
    
        let arrToComponents = (array) => (array.map((value) => ( <li key={value.id} id={value.id} className="productSize" quantity={value.quantity}>{value.size}</li> )));
        
        return (
            <div className="sizeContainer">
                <p>talle</p>
                <ul className="sizeList">
                    {arrToComponents(sizes)}
                </ul>
            </div>
        )
    }
}

export default ProductSizes;