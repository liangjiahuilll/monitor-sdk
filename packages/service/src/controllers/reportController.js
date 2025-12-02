import db from "../services/db.js";

export async function handleReport(req, res) {
  const { type, data, uuid, timestamp } = req.body;

  try {
    if (type === "pv") {
      await db.execute(
        `INSERT INTO t_pv(page, referrer, uuid, timestamp, ip, ua)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          data.page,
          data.referrer,
          uuid,
          timestamp,
          req.ip,
          req.headers["user-agent"] || "",
        ]
      );
    }

    if (type === "performance") {
      await db.execute(
        `INSERT INTO t_performance(fp, fcp, lcp, cls, tti, uuid, timestamp)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [data.fp, data.fcp, data.lcp, data.cls, data.tti, uuid, timestamp]
      );
    }

    if (type === "js_error" || type === "promise_error") {
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
          timestamp,
        ]
      );
    }

    if (type === "event") {
      await db.execute(
        `INSERT INTO t_event(event_name, payload, uuid, timestamp)
         VALUES (?, ?, ?, ?)`,
        [data.eventName, JSON.stringify(data.payload || {}), uuid, timestamp]
      );
    }

    res.json({ success: true });
  } catch (err) {
    console.error("上报失败：", err);
    res.status(500).json({ success: false });
  }
}
