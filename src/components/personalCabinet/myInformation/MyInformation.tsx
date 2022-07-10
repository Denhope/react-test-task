import { Avatar, Divider, Image, Row, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import UserForm from './UserFormInfo';
import './MyInfomation.scss';
import { useActions } from '../../../hooks/usections';
import { IUser } from '../../../models/IUser';
const MyInformation: FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const { saveUserInfo, setUser } = useActions();

  const setUserInfo = (user: IUser) => {
    saveUserInfo(user);
    setUser(user);
  };
  return (
    <Row className="information-page__wrapper">
      <Space align="center">
        <Avatar src={<Image src={user.photoUrl} style={{ width: 32 }} />} />
        <Title className="block-title" level={4}>
          {`Здравствуй, ${user.firstname}`}
        </Title>
      </Space>

      <Divider />
      <UserForm submit={(user) => setUserInfo(user)} user={user} />
    </Row>
  );
};

export default MyInformation;
