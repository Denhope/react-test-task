import { Row, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { FC, useEffect } from 'react';
import { useActions } from '../../../hooks/usections';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IDocs } from '../../../models/IDocs';
import { DownloadIcon } from '../../icons/icons';

const columns: ColumnsType<IDocs> = [
  {
    title: 'Категория',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  },
  { title: 'Дата', dataIndex: 'date', key: 'date' },

  {
    title: 'Номер',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Содержание',
    dataIndex: 'content',
    key: 'content',
    render: (text: string) => {
      return (
        <Row>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <DownloadIcon />

            <a style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span>Скачать</span>
              <span>{text}</span>
            </a>
          </div>
        </Row>
      );
    },
  },
];

const TableDocs: FC = () => {
  const { featchDocs } = useActions();
  const { docsData } = useTypedSelector((state) => state.docs);
  useEffect(() => {
    featchDocs();
  }, []);
  return <Table pagination={false} columns={columns} dataSource={docsData}></Table>;
};

export default TableDocs;
