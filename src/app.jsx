import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;

const App = () => {
    return (<Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>)
};

export const mount = (id) => {
    ReactDOM.render(
        <App />,
        document.getElementById(id)
    )
};