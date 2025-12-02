import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import AppLayout from '../components/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
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
