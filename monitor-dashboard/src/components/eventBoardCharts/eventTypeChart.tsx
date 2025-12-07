import ReactECharts from 'echarts-for-react';

const EventTypeChart = () => {
  const option = {
    color: ['#cd5aaeff', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'PV' },
          { value: 735, name: 'UV' },
          { value: 580, name: '自定义事件' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: 380 }} />;
};

export default EventTypeChart;
