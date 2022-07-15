import React, { FC } from 'react';
import ReestrList from '../components/main/reestrs/ReestrList';
import NewsList from '../components/main/news/NewList';
import DocsList from '../components/main/docs/DocsList';

const Main: FC = () => {
  return (
    <>
      <ReestrList />
      <NewsList />
      <DocsList />
    </>
  );
};

export default Main;
