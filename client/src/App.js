import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store.js';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';

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
