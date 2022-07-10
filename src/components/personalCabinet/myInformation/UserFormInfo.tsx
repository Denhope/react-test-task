import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';

import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';
import './UserFormInfo.scss';
import Title from 'antd/lib/typography/Title';
import { rules } from '../../../utils/rules';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IUser } from '../../../models/IUser';
const { Option } = Select;
interface UserFormProps {
  user: IUser;
  submit: (user: IUser) => void;
}

const UserForm: FC<UserFormProps> = (props) => {
  const [userInfo, setUserInfo] = useState<IUser>({
    firstname: props.user.firstname,
    lastname: props.user.lastname,
    password: props.user.password,
    username: props.user.username,
    city: props.user.city,
    country: props.user.country,
    midlename: props.user.midlename,
    photoUrl: props.user.photoUrl,
    telephone: props.user.telephone,
  } as IUser);

  const submitForm = () => {
    props.submit({ ...userInfo });
  };

  return (
    <Row>
      <Form className="form__user" layout="vertical" onFinish={submitForm}>
        <Title className="block-title" level={4}>
          Основные данные
        </Title>
        <Row className="user-form__wrapper">
          <Col span="11">
            <Form.Item label="Имя">
              <Input
                value={userInfo.firstname}
                onChange={(e) => setUserInfo({ ...userInfo, firstname: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="Отчество">
              <Input
                value={userInfo.midlename}
                onChange={(e) => setUserInfo({ ...userInfo, midlename: e.target.value })}
              />
            </Form.Item>
            <Form.Item
              name="select-city"
              label="Город"
              rules={[rules.required('Пожалуйста выберите город')]}
            >
              <Select
                defaultValue={props.user.city}
                placeholder="выберите город"
                onChange={(city: string) => setUserInfo({ ...userInfo, city })}
              >
                <Option value="minsk">Минск</Option>
                <Option value="brest">Брест</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span="11">
            <Form.Item label="Фамилия">
              <Input
                value={userInfo.lastname}
                onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
              />
            </Form.Item>
            <Form.Item
              name="select-country"
              label="Страна"
              rules={[rules.required('Пожалуйста выберите страну')]}
            >
              <Select
                defaultValue={props.user.country}
                placeholder="выберите страну"
                onChange={(country: string) => setUserInfo({ ...userInfo, country })}
              >
                <Option value="belarus">Беларусь</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Мобильный телефон">
              <Input
                value={userInfo.telephone}
                onChange={(e) => setUserInfo({ ...userInfo, telephone: e.target.value })}
              />
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
              <Input.Password
                value={userInfo.password}
                onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider />
      <Button className="btn-primary" type="primary" onClick={submitForm}>
        Сохранить
      </Button>
    </Row>
  );
};

export default UserForm;
