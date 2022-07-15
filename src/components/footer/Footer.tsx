import { Col, Divider, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import { LogoIcon } from '../icons/icons';
import './Footer.scss';
const Footer: FC = () => {
  return (
    <div className="footer__wrapper">
      <Row className="footer__content">
        <Col span={7}>
          <Title className="block-title" level={4}>
            <LogoIcon />
          </Title>
          <Paragraph className="footer-text" style={{ maxWidth: 240 }}>
            Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта
            2014 г
          </Paragraph>
          <Title className="block-title" level={4}>
            Разработчик
          </Title>
          <Row className="footer-text">
            <span>ОАО «Агентство сервисизации и реинжиниринга»</span>
            <span>Минск, улица Клары Цеткин, 24</span>
          </Row>
        </Col>
        <Col span={3}>
          <Title className="block-title" level={4}>
            Информация
          </Title>
          <Row className="footer-block">
            <span>
              <a href="#reestrs">Реестры</a>
            </span>
            <span>
              <a href="#news">Новости</a>
            </span>
            <span>
              <a href="#docs">Документы</a>
            </span>
            <span>
              <a href="#questions">Вопросы</a>
            </span>
          </Row>
        </Col>
        <Col span={6}>
          <Title className="block-title" level={4}>
            Техническая поддержка
          </Title>
          <Paragraph className="footer-text">
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных
            дней.
          </Paragraph>
          <Row className="footer-block">
            <span>+375 25 111 22 33 </span>
            <span>+375 29 222 44 55 </span>
            <span>ReestrPOsupport@mail.ru </span>
          </Row>
        </Col>
        <Col span={5}>
          <Title className="block-title" level={4}>
            Контакты
          </Title>
          <Row className="footer-block">
            <span>+375 33 112 22 45 </span>
            <span>+375 29 222 44 88</span>
            <span>ReesrtPO@mail.ru </span>
            <span>220004 г. Минск, ул. Карла Маркса, 38 </span>
            <span>
              <a className="login-form-forgot" href="#">
                Связаться с поддержкой
              </a>
            </span>
          </Row>
        </Col>
      </Row>
      <Divider />
      <div className="copyright">© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</div>
    </div>
  );
};

export default Footer;
