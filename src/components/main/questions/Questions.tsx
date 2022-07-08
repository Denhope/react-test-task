import { Layout } from 'antd';
import React, { FC } from 'react';

const Questions: FC = () => {
  return (
    <div>
      <Layout className="reestr__section">
        <div className="reestr__wrapper">
          <div className="reestr__title">
            <h2 className="title">Реестры</h2>
          </div>
          <div className="question-block"></div>
        </div>
      </Layout>
    </div>
  );
};

export default Questions;
