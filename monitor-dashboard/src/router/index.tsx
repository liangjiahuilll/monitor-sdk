import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import AppLayout from "../components/layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>
  },
  {
    path: "/",
    element: <AppLayout />,     // 布局组件！
    children: [
      {
        index: true,            // 默认 / = Dashboard
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <div>用户管理页面</div>,
      },
      {
        path: "settings",
        element: <div>设置页面</div>,
      },
    ],
  },
])

export default router