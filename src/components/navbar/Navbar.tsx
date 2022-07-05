import { Avatar, Image, Layout, Menu, PageHeader, Row, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/usections';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../router';
import './Navbar.scss';

import { NotesCalendarIcon, BellIcon, LineIcon } from '../../components/icons/icons';
import { UserOutlined } from '@ant-design/icons';

const Navbar: FC = () => {
  const { logout } = useActions();
  const exit = () => {
    logout();
  };

  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout>
      <PageHeader
        className="site-page-header"
        title="Реестр ПО"
        onBack={() => null}
        extra={[
          <Row align="middle">
            <Search placeholder="поиск" onSearch={() => null} style={{ maxWidth: 200 }} />
            <Row align="middle">
              <Space align="center" size={20}>
                <NotesCalendarIcon style={{ fontSize: '32px' }} />
                <BellIcon style={{ fontSize: '32px' }} />
                <LineIcon />
                <Space>
                  {isAuth ? (
                    <Space align="center" size={10}>
                      <Avatar
                        src={
                          <Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />
                        }
                      />

                      <Menu>
                        <Menu.SubMenu key="SubMenu" title={user.username}>
                          <Menu.Item onClick={exit} key={1}>
                            Выйти
                          </Menu.Item>
                        </Menu.SubMenu>
                      </Menu>
                    </Space>
                  ) : (
                    <Space align="center" size={10}>
                      <Avatar size={32} icon={<UserOutlined />} />

                      <Menu>
                        <Menu.SubMenu key="SubMenu" title="Вход не выполнен">
                          <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>
                            Авторизоваться
                          </Menu.Item>
                        </Menu.SubMenu>
                      </Menu>
                    </Space>
                  )}
                </Space>
              </Space>
            </Row>
          </Row>,
        ]}
      />
    </Layout>
  );
};

export default Navbar;
