import { Layout } from 'antd';
import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.scss';

const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};

export default App;
