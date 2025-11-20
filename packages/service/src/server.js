import express, { json } from 'express';
import mysql from 'mysql2/promise';
const app = express();

// 解析 JSON 请求体
app.use(json());

async function init(params) {
  const connection = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '!19750323Ljh',
    database: 'monitor',
    port: 3306
  });

  app.post('/report', async (req, res) => {
    const { type, data, uuid, timestamp } = req.body;
    try {
      if (type === 'pv') {
        `INSERT INTO t_pv(page, referrer, uuid, timestamp, ip, ua)
        VALUES (?, ?, ?, ?, ?, ?)`[
          (data.page, data.referrer, uuid, timestamp, req.ip, req.headers['user-agent'])
        ];
      }

      if (type === 'performance') {
        await db.execute(
          `INSERT INTO t_performance(fp, fcp, lcp, cls, tti, uuid, timestamp)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [data.fp, data.fcp, data.lcp, data.cls, data.tti, uuid, timestamp]
        );
      }

      if (type === 'error') {
        await db.execute(
          `INSERT INTO t_error(message, stack, filename, lineno, colno, uuid, timestamp)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            data.message || null,
            data.stack || null,
            data.filename || null,
            data.lineno ?? null,
            data.colno ?? null,
            uuid,
            timestamp
          ]
        );
      }

      if (type === 'event') {
        await db.execute(
          `INSERT INTO t_event(event_name, payload, uuid, timestamp)
           VALUES (?, ?, ?, ?)`,
          [data.eventName, JSON.stringify(data.payload || {}), uuid, timestamp]
        );
      }
      res.json({ success: true });
    } catch (e) {
      console.error('上报失败：', e);
      res.status(500).json({ success: false });
    }
  });
  console.log('数据库连接已关闭');

  app.listen(3000, () => {
    console.log('http://localhost:3000');
  });
}

init();
