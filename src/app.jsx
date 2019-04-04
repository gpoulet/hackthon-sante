import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { Router, Route, NavLink, Switch, Redirect } from "react-router-dom";

import { WingBlank, NavBar, Icon, WhiteSpace, Popover } from 'antd-mobile';

const Item = Popover.Item;

import { library } from '@fortawesome/fontawesome-svg-core'
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
import ParkourAdd from "./components/Parkours/ParkourAdd.js";
import { ROUTING_USERS, ROUTING_AGENDA, ROUTING_ADD, ROUTING_PARKOURS} from "./constants";

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
        <NavBar mode="light"></NavBar>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path={ROUTING_USERS + ROUTING_ADD} exact component={UserAdd}/>
            <Route path={ROUTING_USERS + "/:userId"} exact component={Parkours}/>
            <Route path={ROUTING_USERS + "/:userId"+ ROUTING_PARKOURS + ROUTING_ADD} exact component={ParkourAdd}/>
            <Route path={ROUTING_USERS} component={Users}/>
            <Route path={ROUTING_AGENDA} exact component={Agenda}/>
            <Redirect from="/" to="/login"/>
          </Switch>
        </WingBlank>
        <NavBar mode="light"></NavBar>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path={ROUTING_USERS + ROUTING_ADD} exact component={UserAdd}/>
            <Route path={ROUTING_USERS + "/:userId"} exact component={Parkours}/>
            <Route path={ROUTING_USERS + "/:userId"+ ROUTING_PARKOURS + ROUTING_ADD} exact component={ParkourAdd}/>
            <Route path={ROUTING_USERS} component={Users}/>
            <Route path={ROUTING_AGENDA} exact component={Agenda}/>
            <Redirect from="/" to="/login"/>
          </Switch>
        </WingBlank>

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
