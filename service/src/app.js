import express from 'express';
import reportRouter from './routes/report.js';
import errorRouter from './routes/error.js';

const app = express();
app.use(express.json());

// 注册路由
app.use('/report', reportRouter);
app.use('/error', errorRouter);

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动：http://localhost:3000');
});
