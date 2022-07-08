import { Col, Divider, Layout, PageHeader, Row, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { FilterIcon, SearchIcon, TreeDootsVerticalIcon } from '../../icons/icons';
import './ReestrList.scss';
import Table from './table/Table';
const ReestrList: FC = () => {
  return (
    <>
      <Layout className="information__section">
        <div className="information__wrapper">
          <div className="information__content">
            <h1>РЕЕСТР ПРОГРАМНОГО ОБЕСПЕЧЕНИЯ</h1>
            <p className="information__subtitle">
              Единый реестр программ для электронных вычислительных машин и баз данных
            </p>
            <p className="information__subtitle">
              <span>Включено ПО в реестр: 13 438</span>
              <span>Правообладателей: 4 272</span>
            </p>
            <Search
              placeholder="Искать реестр..."
              allowClear
              prefix={<SearchIcon />}
              enterButton="Искать"
              size="large"
              onSearch={() => null}
            />
          </div>
          <div className="information__logo">
            <img src="public/image/3d Office Work 1.png"></img>
          </div>
        </div>
      </Layout>
      <Layout className="reestr__section">
        <div className="reestr__wrapper">
          <div className="reestr__title">
            <h2 className="title">Реестры</h2>
            <div className="title__icons">
              <Space align="center" className="filter-block">
                <FilterIcon style={{ fontSize: '32px' }} />
                <TreeDootsVerticalIcon style={{ fontSize: '32px' }} />
              </Space>
            </div>
          </div>
          <Row>
            <Col xs={24} md={{ span: 24 }}>
              <Table></Table>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default ReestrList;
