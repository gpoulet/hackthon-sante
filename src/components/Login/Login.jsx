import React from 'react';

import { Form, Icon, Input, Button, Checkbox, } from 'antd';

const Login = (props) => {
    const { getFieldDecorator } = props.form;

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
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};

export default Form.create({ name: 'login' })(Login);
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
