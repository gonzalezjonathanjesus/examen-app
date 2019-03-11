import React, { Component } from 'react';
import Header from './../Header';
import Footer from './../Footer';
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header></Header>
                    <div>
                        { this.props.children }
                    </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Layout;