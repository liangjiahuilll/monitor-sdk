import React from 'react';
import CardList from '../components/cardList';
import DashboardCharts from '../components/performanceChats';
import BoardTable from '../components/boardTable';

const Performance: React.FC = () => {
  const cards = [
    { title: 'html加载耗时', time: '1.23', lastweek: '下降' },
    { title: 'html加载耗时', time: '1.23', lastweek: '下降' }
  ];
  return (
    <div>
      <CardList cards={cards} />
      <DashboardCharts></DashboardCharts>
      <BoardTable></BoardTable>
    </div>
  );
};

export default Performance;
