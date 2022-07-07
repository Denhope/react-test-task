import { Card, Row, Space } from 'antd';
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
    <Row className="news__list">
      {newsData.map((newsDataItem) => (
        <NewsCard
          logoUrl={newsDataItem.logoUrl}
          title={newsDataItem.title}
          date={newsDataItem.date}
          discription={newsDataItem.discription}
          link={newsDataItem.link}
        ></NewsCard>
      ))}
    </Row>
  );
};

export default NewList;
