import { Divider, Layout } from 'antd';
import React, { FC } from 'react';
import './PersonCabinet.scss';
import UserCabinetLIst from '../components/personalCabinet/UserCabinetLIst';

const PersonalCabinet: FC = () => {
  return (
    <Layout className="user__section">
      <div className="user__title">
        <h2>Личный кабинет</h2>
      </div>
      <Divider />
      <UserCabinetLIst />
    </Layout>
  );
};

export default PersonalCabinet;
