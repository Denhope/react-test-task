import { Button, Checkbox, Form, Input } from 'antd';
import React, { FC } from 'react';
import { rules } from '../../utils/rules';
import './LoginForm.scss';

const LoginForm: FC = () => {
  const submit = () => {
    console.log('Submit');
  };

  return (
    <Form layout="vertical" onFinish={submit}>
      <Form.Item label="Имя пользователя" rules={[rules.required('Введите имя')]} name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Пароль" name="password" rules={[rules.required('Введите пароль')]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня на этом компьютере</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Вход
        </Button>
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Забыли свой пароль?
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
