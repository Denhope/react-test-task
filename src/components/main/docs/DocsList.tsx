import { Col, Layout, Row } from 'antd';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Table from './TableDocs';
import './DocsList.scss';
const DocsList: FC = () => {
  const { docsData } = useTypedSelector((state) => state.docs);
  return (
    <Layout id="documents">
      <div className="section__title">
        <h2 className="title">Документы</h2>
        <p className="section__subtitle">
          <span>Всего документов:</span>
          <span className="subtitle__length">{docsData.length}</span>
        </p>
      </div>
      <Row>
        <Col xs={24} md={{ span: 24 }}>
          <Table></Table>
        </Col>
      </Row>
    </Layout>
  );
};

export default DocsList;
