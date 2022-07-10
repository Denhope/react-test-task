import { Avatar, Divider, Image, Input, Layout, Menu, PageHeader, Row, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/usections';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../router';
import './Navbar.scss';

import {
  NotesCalendarIcon,
  BellIcon,
  LineIcon,
  LogoIcon,
  SearchIcon,
} from '../../components/icons/icons';
import { UserOutlined } from '@ant-design/icons';

const Navbar: FC = () => {
  const { logout } = useActions();
  const exit = () => {
    logout();
  };

  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Row className="header__wrapper">
      <Row align="middle" className="header__left ">
        <LogoIcon />
        <Input
          prefix={<SearchIcon />}
          placeholder="поиск"
          onChange={() => null}
          style={{ maxWidth: 200 }}
        />
      </Row>
      <Row align="middle" className="header__end">
        <Space align="center" size={20}>
          <Row align="middle" className="header-notification">
            <NotesCalendarIcon style={{ fontSize: '32px' }} />
            <BellIcon style={{ fontSize: '32px' }} />
            <LineIcon />
          </Row>

          <>
            {isAuth ? (
              <Space align="center" size={10}>
                <Avatar src={<Image src={user.photoUrl} style={{ width: 32 }} />} />

                <Menu>
                  <Menu.SubMenu key="SubMenu" title={user.firstname}>
                    <Menu.Item onClick={exit} key={1}>
                      Выйти
                    </Menu.Item>
                    <Menu.Item key={2} onClick={() => router.push(RouteNames.PERSONALCABINET_INFO)}>
                      Личный кабинет
                    </Menu.Item>
                    <Menu.Item key={3} onClick={() => router.push(RouteNames.MAIN)}>
                      Главная
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Space>
            ) : (
              <Space align="center" size={10}>
                <Avatar size={32} icon={<UserOutlined />} />

                <Menu>
                  <Menu.SubMenu key="SubMenu" title="Вход в аккаунт">
                    <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>
                      Авторизоваться
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Space>
            )}
          </>
        </Space>
      </Row>
    </Row>
  );
};

export default Navbar;
