import { Layout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import AppRouter from '../../components/AppRouter';
import { useActions } from '../../hooks/usections';
import './Cabinet.scss';
import {
  BellIcon,
  DownloadIcon,
  LockClosedIIIcon,
  LogoutIcon,
  NoteBookmarkIcon,
  PaperIcon,
  UserRoundIcon,
} from '../icons/icons';
import MyInformation from './myInformation/MyInformation';

export const UserCabinetLIst: FC = () => {
  const { logout } = useActions();
  const exit = () => {
    logout();
  };
  return (
    <div className="cabinet__wrapper">
      <Sider>
        <Menu defaultSelectedKeys={['1']}>
          <Menu.Item
            icon={<UserRoundIcon style={{ fontSize: '32px' }} />}
            onClick={() => null}
            key={1}
          >
            Мои данные
          </Menu.Item>
          <Menu.Item icon={<BellIcon style={{ fontSize: '32px' }} />} onClick={() => null} key={2}>
            Уведомления
          </Menu.Item>
          <Menu.Item
            icon={<NoteBookmarkIcon style={{ fontSize: '32px' }} />}
            onClick={() => null}
            key={3}
          >
            Реестры
          </Menu.Item>
          <Menu.Item icon={<PaperIcon style={{ fontSize: '32px' }} />} onClick={() => null} key={4}>
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
    </div>
  );
};

export default UserCabinetLIst;
