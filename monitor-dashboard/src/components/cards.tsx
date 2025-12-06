import React from 'react';
import { Card } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';
import './cards.less';

const Cards: React.FC = () => {
  return (
    <Card>
      <div className="left-card">shijian</div>
      <div className="right-card">
        <FieldTimeOutlined />
      </div>
    </Card>
  );
};

export default Cards;
