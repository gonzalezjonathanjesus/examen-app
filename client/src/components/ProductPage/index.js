import React, { Component } from 'react';
import store from '../../stores/store';
import { connect } from 'react-redux';
import { fetchProductItem } from '../../actions/actions';

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productItem: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchProductItem(this.props.match.params.id));
    }

    render() {

        let { productItem } = this.props;
        console.log(this.props.productItem);
        return (
            <div>{this.props.productItem.productname}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productItem: state.product.productItem
    }
};

export default connect(mapStateToProps)(ProductPage)