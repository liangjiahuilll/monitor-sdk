import mysql from "mysql2/promise";

const db = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "!19750323Ljh",
  database: "monitor",
  port: 3306,
});

export default db;
