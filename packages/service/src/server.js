const express = require("express");
const app = express();

// 解析 JSON 请求体
app.use(express.json());

// 启动端口
const PORT = 3000;

// 启动服务
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello Node Server!");
});

app.get("/user", (req, res) => {
  res.json({ name: "jiahui", age: 20 });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    res.json({ code: 0, msg: "登录成功" });
  } else {
    res.json({ code: -1, msg: "账号或密码错误" });
  }
});
