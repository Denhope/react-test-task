import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';
import './UserFormInfo.scss';
import Title from 'antd/lib/typography/Title';
import { rules } from '../../../utils/rules';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
const { Option } = Select;

const UserForm = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [password, setPassword] = useState(user.password);
  const [country, setCountry] = useState(user.country);
  const [telephone, setTelephone] = useState(user.telephone);
  const [midlename, setMidleName] = useState(user.midlename);
  const [city, setCity] = useState(user.city);
  return (
    <Row>
      <Form className="form__user" layout="vertical" onFinish={() => null}>
        <Title className="block-title" level={4}>
          Основные данные
        </Title>
        <Row className="user-form__wrapper">
          <Col span="11">
            <Form.Item label="Имя">
              <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Отчество">
              <Input value={midlename} onChange={(e) => setMidleName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="select-city"
              label="Город"
              rules={[rules.required('Пожалуйста выберите город')]}
            >
              <Select
                defaultValue={user.city}
                placeholder="выберите город"
                value={city}
                onChange={() => null}
              >
                <Option value="china">Минск</Option>
                <Option value="usa">Брест</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span="11">
            <Form.Item label="Фамилия">
              <Input value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="select-country"
              label="Страна"
              rules={[rules.required('Пожалуйста выберите страну')]}
            >
              <Select
                defaultValue={user.city}
                placeholder="выберите страну"
                value={country}
                onChange={() => null}
              >
                <Option value="china">Беларусь</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Мобильный телефон">
              <Input value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider />

      <Form className="form__user" layout="vertical" onFinish={() => null}>
        <Title className="block-title" level={4}>
          Пароль
        </Title>
        <Row className="user-form__wrapper">
          <Col span="11">
            <Form.Item
              name="password"
              label="Пароль"
              rules={[rules.required('Введите пароль')]}
              // hasFeedback
            >
              <Input.Password placeholder="Введите новый пароль" />
            </Form.Item>
          </Col>
          <Col span="11">
            <Form.Item
              name="confirm"
              label="Подтвердите пароль"
              dependencies={['password']}
              // hasFeedback
              rules={[
                rules.required('Введите пароль'),
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Пороли должны совпадать'));
                  },
                }),
              ]}
            >
              <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider />
      <Button className="btn-primary" type="primary">
        Сохранить
      </Button>
    </Row>
  );
};

export default UserForm;
