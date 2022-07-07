import { Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { INewsCard } from '../../../models/INewsCard';
import { NotesCalendarIcon } from '../../icons/icons';
import './NewsCard.scss';
const NewsCard: FC<INewsCard> = (props) => {
  const newsCard = props;
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt="logo" src={newsCard.logoUrl} />}>
      <Title className="news-card__title" level={4}>
        {newsCard.title}
      </Title>
      <Row className="news-card__date">
        <NotesCalendarIcon />
        <span className="date-item">{newsCard.date}</span>
      </Row>
      <Row className="news-card__discruprion">{newsCard.discription}</Row>
    </Card>
  );
};

export default NewsCard;
