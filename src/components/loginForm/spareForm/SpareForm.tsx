import { Form, Input, Row, Space } from 'antd';
import React, { FC } from 'react';
import './SpareForm.scss';

const SpareForm: FC = () => {
  return (
    <Space direction="vertical">
      <Form>
        <Form.Item className="spare-form">
          <a className="aut-iful" href="">
            Авторизация с использованием ЕС ИФЮЛ
          </a>
        </Form.Item>
        <Form.Item className="spare-form">
          <a className="aut-msi" href="">
            Авторизация с использованием МСИ
          </a>
        </Form.Item>
      </Form>
      <Form>
        <Form.Item className="registration-block">У вас нет аккаунта?</Form.Item>
        <Form.Item className="">
          <a className="registration-link" href="">
            Нажмите сюда чтобы создать
          </a>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default SpareForm;
