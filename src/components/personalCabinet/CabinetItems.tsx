import React, { FC } from 'react';

import { Divider, Layout, Menu, PageHeader, Row } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Header, Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Footer from '../footer/Footer';
import {
  BellIcon,
  DownloadIcon,
  LockClosedIIIcon,
  LogoutIcon,
  NoteBookmarkIcon,
  PaperIcon,
  UserRoundIcon,
} from '../icons/icons';
import './Cabinet.scss';
import AppRouter from '../AppRouter';
import { useActions } from '../../hooks/usections';
import MyInformation from './myInformation/MyInformation';

const CabinetItems: FC = () => {
  const { logout } = useActions();
  const exit = () => {
    logout();
  };
  return (
    <>
      <Divider />
      <PageHeader className="form-page-header" title="Личный кабинет"></PageHeader>
      <div className="page-wrapper">
        <Sider>
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']}>
            <Menu.Item
              icon={<UserRoundIcon style={{ fontSize: '32px' }} />}
              onClick={() => null}
              key={1}
            >
              Мои данные
            </Menu.Item>
            <Menu.Item
              icon={<BellIcon style={{ fontSize: '32px' }} />}
              onClick={() => null}
              key={2}
            >
              Уведомления
            </Menu.Item>
            <Menu.Item
              icon={<NoteBookmarkIcon style={{ fontSize: '32px' }} />}
              onClick={() => null}
              key={3}
            >
              Реестры
            </Menu.Item>
            <Menu.Item
              icon={<PaperIcon style={{ fontSize: '32px' }} />}
              onClick={() => null}
              key={4}
            >
              Метаданные
            </Menu.Item>
            <Menu.Item
              icon={<LockClosedIIIcon style={{ fontSize: '32px' }} />}
              onClick={() => null}
              key={5}
            >
              Безопасность
            </Menu.Item>
            <Menu.Item
              icon={<DownloadIcon style={{ fontSize: '32px' }} />}
              onClick={() => null}
              key={6}
            >
              Мои загрузки
            </Menu.Item>
            <Menu.Item onClick={exit} icon={<LogoutIcon style={{ fontSize: '32px' }} />} key={7}>
              Выход
            </Menu.Item>
          </Menu>
        </Sider>
        <MyInformation />

        <div className="page-content"></div>
      </div>
    </>
  );
};

export default CabinetItems;
