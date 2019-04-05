import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { Router, Route, Link, Switch, Redirect } from "react-router-dom";

import { WingBlank, NavBar, WhiteSpace, Drawer, List } from 'antd-mobile';
import { Icon } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faMedkit, faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
library.add(faMedkit)
library.add(faUserPlus)

import { ConnectedRouter, routerMiddleware } from 'connected-react-router'

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/';

import Agenda from './components/Agenda'
import Users from "./components/Users";
import UserAdd from "./components/Users/UserAdd.js";
import Splash from "./components/Splash";
import Parkours from "./components/Parkours";
import Timeline from "./components/Timeline";
import ParkourAdd from "./components/Parkours/ParkourAdd.js";
import {ROUTING_USERS, ROUTING_AGENDA, ROUTING_ADD, ROUTING_PARKOURS, ROUTING_DOCUMENTS} from "./constants";

import history from './history';
import Login from "./components/Login/Login";
import Documents from "./components/Documents";
import DocumentAdd from "./components/Documents/DocumentAdd";
import EventAdd from "./components/Event/EventAdd";


// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(history), /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history))
));

const data = [
  {
    value: '2',
    label: 'Famille',
    link: '/users',
    icon: 'home'
  },
  {
    value: '3',
    label: 'Agenda',
    link: '/agenda',
    icon: 'calendar'
  },

];

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

  const Sidebar = () => {
    return data.map(
      (item, index) => {
        return <List.Item key={index}>
          <Link to={item.link} onClick={() => setIsMenuVisible(!isMenuVisible)}><Icon type={item.icon} style={{color: '#222'}} />&nbsp;&nbsp;<span style={{color: '#222'}}>{item.label}</span></Link>
        </List.Item>
      }
    )
  };

  if (splash) return <Splash/>

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <NavBar className="top-nav-bar"
                  icon={<Icon type="ellipsis" style={{ cursor: 'pointer' }} />}
                  onLeftClick={(...args) => {
                    console.log(args);
                    setIsMenuVisible(!isMenuVisible);
                  }}></NavBar>
          <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
            sidebar={<Sidebar />}
            docked={isMenuVisible}
            open={isMenuVisible}

          > </Drawer>
          < WhiteSpace size="lg"/>
          <WingBlank>
            <Switch>
              <Route path="/login" exact component={Login}/>
              <Route path={ROUTING_USERS + ROUTING_ADD} exact component={UserAdd}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_PARKOURS + ROUTING_ADD} exact component={ParkourAdd}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_PARKOURS + "/:parkoursId"} exact component={Timeline}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_PARKOURS + "/:parkoursId" + "/add"} exact component={EventAdd}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_PARKOURS } exact component={Parkours}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_DOCUMENTS} exact component={Documents}/>
              <Route path={ROUTING_USERS + "/:userId" + ROUTING_DOCUMENTS + ROUTING_ADD} exact component={DocumentAdd}/>
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

Notification.requestPermission().then(status => {
  console.log(status); // les notifications ne seront affichées que si "autorisées"
});

setTimeout(() => {
  let n = new Notification("Rendez-vous médecin Marge Simpson", {
    body: "Prendre un rendez-vous le 12 Avril chez le médecin généraliste pour Marge Simpson",
    icon: "assets/images/logo.png",
  }); // this also shows the notification
  n.onshow = function () {
    setTimeout(n.close.bind(n), 5000);
  }
}, 9000);

export const mount = (id) => {
  ReactDOM.render(
    <App/>,
    document.getElementById(id)
  )
};
