import { Layout, PageHeader, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/icons/icons';
import LoginForm from '../components/loginForm/LoginForm';
import SpareForm from '../components/loginForm/spareForm/SpareForm';
import { useActions } from '../hooks/usections';
import { RouteNames } from '../router';
import './Login.scss';
const Login: FC = () => {
  const router = useHistory();
  return (
    <>
      <Layout className="login__section">
        <div onClick={() => router.push(RouteNames.MAIN)} className="login__back">
          <ArrowLeftIcon style={{ fontSize: '24px' }} />
          <p className="bask__text">Главная</p>
        </div>

        <h2>Авторизация</h2>
        <LoginForm />
        <SpareForm />
      </Layout>
    </>
  );
};

export default Login;
