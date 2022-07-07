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
      <PageHeader
        className="avtorithation-page-title"
        title="Главная"
        onBack={() => router.push(RouteNames.MAIN)}
        backIcon={<ArrowLeftIcon style={{ fontSize: '24px' }} />}
      ></PageHeader>

      <Row justify="center" align="middle">
        <Title>Авторизация</Title>
      </Row>

      <Row justify="center" align="middle" className="h100">
        <LoginForm />
      </Row>
      <Row justify="center" align="middle">
        <SpareForm />
      </Row>
    </>
  );
};

export default Login;
