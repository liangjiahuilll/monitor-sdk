import ReactECharts from 'echarts-for-react';

const ErrorTrendChart = () => {
  const option = {
    color: ['#c654baff', '#f39d56ff', '#FAC858', '#EE6666'],
    // title: {
    //   text: '错误趋势分析'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['JS错误', '网络错误', '资源错误', '运行时错误'],
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
        name: 'JS错误',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [30, 50, 45, 60, 40, 55, 35]
      },
      {
        name: '网络错误',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [15, 20, 18, 25, 22, 28, 18]
      },
      {
        name: '资源错误',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [10, 15, 12, 14, 13, 18, 10]
      },
      {
        name: '运行时错误',
        type: 'line',
        smooth: true,
        stack: 'Total',
        data: [8, 12, 10, 16, 12, 15, 9]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 380 }} />;
};

export default ErrorTrendChart;
