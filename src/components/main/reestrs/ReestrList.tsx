import { Col, Divider, PageHeader, Row, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { FilterIcon, TreeDootsVerticalIcon } from '../../icons/icons';
import './ReestrList.scss';
import Table from './table/Table';
const ReestrList: FC = () => {
  return (
    <>
      <Row className="main__title-block">
        <Col span={12}>
          <Title className="block-title" level={1}>
            РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ
          </Title>
          <Title className="block-text" level={4}>
            Единый реестр программ для электронных вычислительных машин и баз данных
          </Title>
          <Title className="block-text" level={4}>
            <span>Включено ПО в реестр: 13 438</span>
            <span>Правообладателей: 4 272</span>
          </Title>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={() => null}
          />
        </Col>
        <Col className="main__logo" span={12} flex={0}>
          <img src="public/image/3d Office Work 1.png"></img>
        </Col>

        <Divider />
      </Row>
      <Row className="reestr__list">
        <Row className="reestr-list__title">
          <Title className="header-left" level={4}>
            Реестры
          </Title>
          <Row align="middle" className="header-end">
            <Space align="center" className="filter-block">
              <FilterIcon style={{ fontSize: '32px' }} />
              <TreeDootsVerticalIcon style={{ fontSize: '32px' }} />
            </Space>
          </Row>
        </Row>

        <Col xs={24} md={{ span: 24 }}>
          <Table></Table>
        </Col>
      </Row>
    </>
  );
};

export default ReestrList;
