import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import Layout from './components/layouts/Layout';
import { Provider } from 'react-redux';
import store from './stores/store.js';
import ProductPage from './components/ProductPage';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/product/:id" component={ProductPage} />
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
