import React, { Component } from 'react';
import './ProductFav.css';

class ProductFav extends Component {
    render() {
        return (
            <div className="ProductFav">
                <svg fill="#fff" width="37" height="37" class="whishlistItem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#8f8f8f" stroke-width="2"></path>
                </svg>
            </div>
        )
    }
}

export default ProductFav;