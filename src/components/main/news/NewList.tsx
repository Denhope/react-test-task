import { Card, Layout, Row, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC, useEffect } from 'react';
import { useActions } from '../../../hooks/usections';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import NewsCard from './NewsCard';
import './NewsList.scss';

const NewList: FC = () => {
  const { newsData } = useTypedSelector((state) => state.news);
  const { featchNews } = useActions();
  useEffect(() => {
    featchNews();
  }, []);

  return (
    <Layout className="news__section">
      <div className="news__wrapper">
        <h2 className="title">Новости</h2>
        <Row className="news__list">
          {newsData.map((newsDataItem) => (
            <NewsCard
              key={newsDataItem.id}
              logoUrl={newsDataItem.logoUrl}
              title={newsDataItem.title}
              date={newsDataItem.date}
              discription={newsDataItem.discription}
              link={newsDataItem.link}
              id={newsDataItem.id}
            ></NewsCard>
          ))}
        </Row>
      </div>
    </Layout>
  );
};

export default NewList;
