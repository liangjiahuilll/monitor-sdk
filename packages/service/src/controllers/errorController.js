import db from "../services/db.js";
import { resolveSourceMap } from "../services/sourcemap.js";

export async function getErrorDetail(req, res) {
  const { id } = req.query;

  try {
    const [rows] = await db.query("SELECT * FROM t_error WHERE id = ?", [id]);
    const record = rows[0];

    if (!record) {
      return res.json({ success: false, message: "记录未找到" });
    }

    // sourcemap 还原
    const resolved = await resolveSourceMap({
      filename: record.filename,
      lineno: record.lineno,
      colno: record.colno,
    });

    res.json({
      success: true,
      record,
      resolved,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false });
  }
}
