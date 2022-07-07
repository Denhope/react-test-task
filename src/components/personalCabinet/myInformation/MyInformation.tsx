import { Avatar, Divider, Image, Row, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import UserForm from './UserFormInfo';
import './MyInfomation.scss';
const MyInformation: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  return (
    <Row className="information-page__wrapper">
      <Space align="center">
        <Avatar src={<Image src={user.photoUrl} style={{ width: 32 }} />} />
        <Title className="block-title" level={4}>
          {`Здравствуй, ${user.firstname}`}
        </Title>
      </Space>

      <Divider />
      <UserForm />
    </Row>
  );
};

export default MyInformation;
