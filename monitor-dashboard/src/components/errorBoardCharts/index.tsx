import React from 'react';
import { Card } from 'antd';
import ErrorTypeChart from './errorTypeChart';
import ErrorTrendChart from './errorTrendChart';

const DashboardCharts = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      {/* <Card> */}
      <ErrorTrendChart />
      {/* </Card> */}
      <ErrorTypeChart />
    </div>
  );
};

export default DashboardCharts;
