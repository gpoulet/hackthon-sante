import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu } from 'antd';

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
                    </Content>
                </Layout>
            </Layout>
        </Router>
    )
};

export const mount = (id) => {
    ReactDOM.render(
        <App/>,
        document.getElementById(id)
    )
};
