import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu } from 'antd';


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/';

import Users from "./components/Users";

// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));



const {
  Header, Content,
} = Layout;


const Index = () => {
    return (
        <h1>Index</h1>
    );
};

const App = () => {
    return (
      <Provider store={store}>
          <Router>
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Content>
                            <Route path="/" exact component={Index} />
                            <Route path="/users"  component={Users} />
                        </Content>
                    </Layout>
                </Layout>
          </Router>
      </Provider>
    )
};

export const mount = (id) => {
    ReactDOM.render(
        <App/>,
        document.getElementById(id)
    )
};
