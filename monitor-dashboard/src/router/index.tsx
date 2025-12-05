import { createBrowserRouter } from 'react-router-dom';
import Performance from '../pages/performance';
import AppLayout from '../components/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Performance />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Performance />
      },
      {
        path: 'user',
        element: <div>用户管理页面</div>
      },
      {
        path: 'settings',
        element: <div>设置页面</div>
      }
    ]
  }
]);

export default router;
