import { Card, Table, Tag, Space } from 'antd';
import React from 'react';

const BoardTable: React.FC = () => {
  const columns = [
    {
      title: '事件类型',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => (
        <Tag style={{ borderRadius: 20, background: '#f0f2f5', color: '#000' }}>{text}</Tag>
      )
    },
    {
      title: '事件名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page'
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) =>
        status === '成功' ? <Tag color="success">成功</Tag> : <Tag color="error">失败</Tag>
    }
  ];

  const data = [
    {
      key: '1',
      type: 'click',
      name: 'button_submit',
      userId: 'user_1234',
      page: '/checkout',
      time: '2025-12-05 14:23:45',
      status: '成功'
    },
    {
      key: '2',
      type: 'pageview',
      name: 'page_view',
      userId: 'user_5678',
      page: '/products',
      time: '2025-12-05 14:23:42',
      status: '成功'
    },
    {
      key: '3',
      type: 'custom',
      name: 'add_to_cart',
      userId: 'user_9012',
      page: '/product/123',
      time: '2025-12-05 14:23:38',
      status: '成功'
    },
    {
      key: '4',
      type: 'click',
      name: 'nav_menu',
      userId: 'user_3456',
      page: '/home',
      time: '2025-12-05 14:23:35',
      status: '成功'
    },
    {
      key: '5',
      type: 'custom',
      name: 'search_product',
      userId: 'user_7890',
      page: '/search',
      time: '2025-12-05 14:23:30',
      status: '失败'
    }
  ];

  return (
    <div className="board-table">
      <Card
        title="实时事件流"
        extra={
          <Space>
            <Tag color="success">
              <span style={{ marginRight: 4 }}>●</span>
              实时更新
            </Tag>
          </Space>
        }
      >
        <Table columns={columns} dataSource={data} pagination={false} style={{ width: '100%' }} />
      </Card>
    </div>
  );
};

export default BoardTable;
