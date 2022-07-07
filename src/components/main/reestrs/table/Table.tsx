import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { FC, useEffect } from 'react';
import { useActions } from '../../../../hooks/usections';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { IReestr } from '../../../../models/IReestr';

const columns: ColumnsType<IReestr> = [
  {
    title: 'Регистрационный номер',
    dataIndex: 'id',
    key: 'id',
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    title: 'Наименование программного обеспечения',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: any, b: any) => a.name - b.name,
  },
  { title: 'Код класса', dataIndex: 'code', key: 'code' },
  { title: 'Класс программного обеспечения', dataIndex: 'class', key: 'class' },
  { title: 'Дата регистрации', dataIndex: 'date', key: 'date' },
  {
    title: 'Адрес сайта',
    dataIndex: 'links',
    key: 'links',
    render: (text: string) => {
      return <a>{text}</a>;
    },
  },
];

const _Table: FC = () => {
  const { featchReestr } = useActions();
  const { reesrtData } = useTypedSelector((state) => state.reestr);
  useEffect(() => {
    featchReestr();
  }, []);
  return <Table columns={columns} dataSource={reesrtData}></Table>;
};

export default _Table;
