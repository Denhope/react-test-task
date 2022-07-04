import { Button, Checkbox, Form, Input } from 'antd';
import React, { FC, useState } from 'react';
import { rules } from '../../utils/rules';
import './LoginForm.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../.././hooks/usections';

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const { login } = useActions();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    login(userName, password);
  };

  return (
    <Form layout="vertical" onFinish={submit}>
      <Form.Item label="Имя пользователя" rules={[rules.required('Введите имя')]} name="username">
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </Form.Item>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item label="Пароль" name="password" rules={[rules.required('Введите пароль')]}>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня на этом компьютере</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} className="login-form-button">
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
