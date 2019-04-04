import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { Router, Route, Link, Switch, Redirect } from "react-router-dom";

import { WingBlank, NavBar, WhiteSpace, Icon, Drawer, List } from 'antd-mobile';

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

const data = [
  {
    value: '2',
    label: 'Famille',
    link: '/users'
  },
  {
    value: '3',
    label: 'Agenda',
    link: '/agenda'
  },
  {
    value: '4',
    label: 'Documents',
    link: '/documents'
  },
];

const Sidebar = () => {
    return data.map(
      (item, index) => {
        return <List.Item key={index}>
          <Link to={item.link} >{item.label}</Link>
        </List.Item>
      }
    )
};

const App = () => {
  const [ splash, setSplash ] = useState(true);
  const [ isMenuVisible, setIsMenuVisible ] = useState(false);

  useEffect(() => {
    if (splash) {
      const timer = setInterval(() => {
        setSplash(false);
        clearInterval(timer);
      }, 1000);
    }
  }, [ splash ]);

  if (splash) return <Splash/>

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <NavBar className="top-nav-bar"
                  icon={<Icon type="ellipsis" />}
                  onLeftClick={(...args) => {
                    console.log(args);
                    setIsMenuVisible(!isMenuVisible);
                  }}></NavBar>
          <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            //enableDragHandle
            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
            sidebar={<Sidebar />}
            docked={isMenuVisible}
            open={isMenuVisible}
          >

          </Drawer>
          < WhiteSpace size="lg"/>
          <WingBlank>
            <Switch>
              <Route path="/login" exact component={Login}/>
              <Route path={ROUTING_USERS + ROUTING_ADD} exact component={UserAdd}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_PARKOURS} exact component={Parkours}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_PARKOURS + ROUTING_ADD} exact component={ParkoursAdd}/>             
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
