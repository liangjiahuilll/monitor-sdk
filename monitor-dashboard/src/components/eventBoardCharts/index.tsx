import React from 'react';
import { Card } from 'antd';
import EventTrendChart from './eventTrendChart';
import EventTypeChart from './eventTypeChart';

const DashboardCharts = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <EventTrendChart></EventTrendChart>
      <EventTypeChart></EventTypeChart>
    </div>
  );
};

export default DashboardCharts;
