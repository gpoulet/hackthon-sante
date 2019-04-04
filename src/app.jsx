import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Layout, Menu } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faMedkit } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
library.add(faMedkit)


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/';

import Users from "./components/Users";
import Parkours from "./components/Parkours";
import { ROUTING_USERS } from "./constants";

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
    <h1><FontAwesomeIcon icon="medkit"/> Index</h1>
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
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Switch>
                  <Route path="/" exact component={Index}/>
                  <Route path={ROUTING_USERS + "/:userId"} exact component={Parkours}/>
                  <Route path={ROUTING_USERS} component={Users}/>
                </Switch>
              </div>
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
