import ReactECharts from 'echarts-for-react';

const ErrorTypeChart = () => {
  const option = {
    // title: {
    //   text: '错误类型分布'
    // },
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '20%',
      right: '10%',
      bottom: '3%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['TypeError', 'ReferenceError', 'NetworkError', 'SyntaxError', 'RangeError', '其他']
    },
    series: [
      {
        name: '错误数量',
        type: 'bar',
        data: [90, 70, 50, 45, 30, 80],
        itemStyle: {
          color: (params: any) => {
            const colors = ['#1677ff', '#52c41a', '#faad14', '#ff4d4f', '#722ed1', '#8c8c8c'];
            return colors[params.dataIndex];
          }
        },
        barWidth: 20
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 380 }} />;
};

export default ErrorTypeChart;
