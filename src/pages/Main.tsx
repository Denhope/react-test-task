import React, { FC } from 'react';
import ReestrList from '../components/main/reestrs/ReestrList';
import NewsList from '../components/main/news/NewList';

const Main: FC = () => {
  return (
    <>
      <ReestrList />
      <NewsList />
    </>
  );
};

export default Main;
