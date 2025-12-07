import { createBrowserRouter } from 'react-router-dom';
import Performance from '../pages/performance';
import AppLayout from '../components/layout';
import ErrorPage from '../pages/errorPage';
import EventPage from '../pages/eventPage';

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
        path: 'errors',
        element: <ErrorPage />
      },
      {
        path: 'events',
        element: <EventPage />
      }
    ]
  }
]);

export default router;
