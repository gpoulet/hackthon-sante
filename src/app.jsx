import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { Router, Route, NavLink, Switch, Redirect } from "react-router-dom";

import { Layout, Menu } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faMedkit } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
library.add(faMedkit)

import { ConnectedRouter, routerMiddleware } from 'connected-react-router'

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
import Login from "./components/Login/Login";


// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(history), /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history))
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
  const [ splash, setSplash ] = useState(true);

  useEffect(() => {
    if (splash) {
      const timer = setInterval(() => {
        setSplash(false);
        clearInterval(timer);
      }, 1000);
    }
  }, [splash]);

  if (splash) return <Splash/>

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <Router history={history}>
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[ '2' ]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><NavLink exact to={ROUTING_USERS}>Profils</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink exact to={ROUTING_AGENDA}>Agenda</NavLink></Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Content>
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Switch>
                  <Route path="/login" exact component={Login}/>
                  <Route path={ROUTING_USERS + ROUTING_ADD} exact component={UserAdd}/>
                  <Route path={ROUTING_USERS + "/:userId"} exact component={Parkours}/>
                  <Route path={ROUTING_USERS} component={Users}/>
                  <Route path={ROUTING_AGENDA} exact component={Agenda}/>
                  <Redirect from="/" to="/login"/>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
      </ConnectedRouter>
    </Provider>
  )
};

export const mount = (id) => {
  ReactDOM.render(
    <App/>,
    document.getElementById(id)
  )
};
