import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import { useActions } from './hooks/usections';
import { IUser } from './models/IUser';
import FooterI from './components/footer/Footer';
import { Header, Content, Footer } from 'antd/lib/layout/layout';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Header className="header-wrapper">
        <Navbar />
      </Header>
      <Content className="content-wrapper">
        <AppRouter />
      </Content>
      <Footer className="footer-wrapper">
        <FooterI />
      </Footer>
    </Layout>
  );
};

export default App;
