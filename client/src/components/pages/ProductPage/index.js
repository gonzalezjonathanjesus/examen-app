import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductItem } from './../../../actions/actions';
import './index.css';
import ProductPhoto from './ProductPhoto';
import ProductInfo from './ProductInfo';
import ProductFav from './ProductFav';
import ProductSizes from './ProductSizes';
import ProductSocialMedia from './ProductSocialMedia';
import ProductDescription from './ProductDescription';
import ProductDetails from './ProductDetails';
import ProductPrice from './ProductPrice';
import Accordion from './../../widgets/Accordion/index';

class ProductPage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProductItem(this.props.match.params.id));
    }

    render() {

        let { productItem } = this.props;
        if (productItem.sizes !== undefined) {
        
            console.log(`index clg ${productItem.sizes}`);
            return (
                <div className="ProductPage">
                    <ProductPhoto data={ {
                        productimage: productItem.productimage,
                        productname: productItem.productname
                    }} />
                    <ProductInfo data={{
                        brand: productItem.brand,
                        productname: productItem.productname,
                        seller: productItem.seller
                    }} />
                    <ProductFav/>
                    <ProductSizes data={{
                        sizes: productItem.sizes
                    }} />
                    <ProductSocialMedia/>
                    <Accordion>
                        <div label='descripción'>
                            <ProductDescription data={{
                                description: productItem.description
                            }}/>
                        </div>
                        <div label='detalle del producto'>
                            <ProductDetails data={{
                                sku: productItem.id,
                                color: productItem.color,
                                season: productItem.season
                            }}/>
                        </div>
                    </Accordion>
                    <div className='ProductBuy'>
                        <ProductPrice data={{originalprice: productItem.originalprice, discountprice: productItem.discountprice}} />
                        <button className="buyButton">Comprar</button>
                    </div>
                </div>
            );
        } else {
            return(
                <div>Loading...</div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        productItem: state.product.productItem
    }
};

export default connect(mapStateToProps)(ProductPage)