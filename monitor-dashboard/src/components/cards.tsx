import React from 'react';
import { Card } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';
import './cards.less';

interface CardItem {
  title: string;
  time: string;
  lastweek: string;
}

interface CardsProps {
  value: CardItem;
}

const Cards: React.FC<CardsProps> = ({ value }) => {
  return (
    <Card>
      <div className="left-card">
        <div>{value.title}</div>
        <div className="time">{value.time}</div>
        <div className="last-week">{value.lastweek}</div>
      </div>
      <div className="right-card">
        <FieldTimeOutlined />
      </div>
    </Card>
  );
};

export default Cards;
