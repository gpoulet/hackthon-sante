import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { Router, Route, Link, Switch } from "react-router-dom";

import { Layout, Menu } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faMedkit } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
library.add(faMedkit)


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/';

import Agenda from './components/Agenda/Agenda'
import Users from "./components/Users";
import UserAdd from "./components/Users/UserAdd.js";
import Splash from "./components/Splash";
import Parkours from "./components/Parkours";
import { ROUTING_USERS, ROUTING_AGENDA, ROUTING_ADD } from "./constants";

import history from './history';


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
    const [splash, setSplash] = useState(true);

    if (splash) {
        const timer = setInterval(() => {
            setSplash(false);
            clearInterval(timer);
        }, 1000);
        return <Splash/>
    }
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to={ROUTING_USERS}>Profils</Link></Menu.Item>
              <Menu.Item key="2"><Link to={ROUTING_AGENDA}>Agenda</Link></Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Content>
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Switch>
                  <Route path="/" exact component={Index}/>
                  <Route path={ROUTING_USERS + ROUTING_ADD} exact component={UserAdd}/>
                  <Route path={ROUTING_USERS + "/:userId"} exact component={Parkours}/>
                  <Route path={ROUTING_USERS} component={Users}/>
                  <Route path={ROUTING_AGENDA} exact component={Agenda}/>
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
