import ReactECharts from 'echarts-for-react';

const PerformanceTrendChart = () => {
  const option = {
    color: ['#c654baff', '#f39d56ff', '#FAC858', '#EE6666', '#91CC75', '#73C0DE'],

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['DNS解析', 'tcp连接', 'HTML加载', '资源加载', '接口耗时', '渲染耗时'],
      top: 40
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'DNS解析',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        data: [30, 50, 45, 60, 40, 55, 35]
      },
      {
        name: 'tcp连接',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        data: [15, 20, 18, 25, 22, 28, 18]
      },
      {
        name: 'HTML加载',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        data: [10, 15, 12, 14, 13, 18, 10]
      },
      {
        name: '资源加载',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {},
        data: [8, 12, 10, 16, 12, 15, 9]
      },
      {
        name: '接口耗时',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        data: [14, 15, 13, 19, 15, 19, 13]
      },
      {
        name: '渲染耗时',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {},
        data: [12, 14, 12, 18, 14, 18, 11]
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: 380 }} />;
};

export default PerformanceTrendChart;
