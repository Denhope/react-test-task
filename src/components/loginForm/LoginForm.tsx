import { Button, Checkbox, Form, Input, Layout, PageHeader } from 'antd';
import React, { FC, useState } from 'react';
import { rules } from '../../utils/rules';
import './LoginForm.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../.././hooks/usections';
import { ArrowLeftIcon } from '../icons/icons';

const LoginForm: FC = () => {
  const { errorLogin, errorPassword, isLoading, error } = useTypedSelector((state) => state.auth);
  const { login } = useActions();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    login(userName, password);
  };

  return (
    <>
      <Form layout="vertical" onFinish={submit}>
        <Form.Item label="Имя пользователя" rules={[rules.required('Введите имя')]} name="username">
          <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
        </Form.Item>
        {errorLogin && <div style={{ color: 'red' }}>{errorLogin}</div>}
        <Form.Item label="Пароль" name="password" rules={[rules.required('Введите пароль')]}>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        {errorPassword && <div style={{ color: 'red' }}>{errorPassword}</div>}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня на этом компьютере</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="login-form-button"
          >
            Вход
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Забыли свой пароль?
          </a>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
