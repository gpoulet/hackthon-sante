import React, { useState } from 'react';

import { createForm } from 'rc-form';
import { InputItem, List } from 'antd-mobile';

const Login = (props) => {
  const { getFieldProps } = props.form;
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        window.location.pathname = "/users"
      }
    });
  };

  return (
    <List>
      <InputItem
        {...getFieldProps('username')}
        clear
        placeholder="Username"
        ref={setUsername}
      ></InputItem>
      <InputItem
        {...getFieldProps('password')}
        clear
        placeholder="Password"
        ref={setPassword}
      ></InputItem>
      <List.Item>
        <div
          style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
          onClick={handleSubmit}
        >
          Login
        </div>
      </List.Item>
    </List>
  );
};

export default createForm()(Login);
