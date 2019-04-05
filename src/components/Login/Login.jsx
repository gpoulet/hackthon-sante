import React, { useState } from 'react';

import { createForm } from 'rc-form';
import { InputItem, List, Flex } from 'antd-mobile';

import history from "../../history";
import { ROUTING_USERS } from "../../constants";

const Login = (props) => {
  const { getFieldProps } = props.form;
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        history.push(ROUTING_USERS + "/")
      }
    });
  };

  return (
    <Flex direction="column">
      <Flex.Item>
        <h1>Identification</h1>
      </Flex.Item>
      <Flex.Item style={{ width: '80%'}}>
        <List>
          <InputItem
            {...getFieldProps('username')}
            clear
            placeholder="Identifiant"
            ref={setUsername}
          ></InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            placeholder="Mot de passe"
            ref={setPassword}
          ></InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={handleSubmit}
            >
              Connexion
            </div>
          </List.Item>
        </List>
      </Flex.Item>
    </Flex>
  );
};

export default createForm()(Login);
