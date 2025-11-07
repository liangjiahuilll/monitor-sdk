module.exports = {
  root: true, // 当前目录为 ESLint 根目录
  env: {
    browser: true,  // 支持浏览器环境
    node: true,     // 支持 node.js
    es2021: true
  },
  parser: "@typescript-eslint/parser", // 解析 TS 代码
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "prettier"], // 使用两个插件
  extends: [
    "eslint:recommended",              // 基础规则
    "plugin:@typescript-eslint/recommended", // TS推荐规则
    "plugin:prettier/recommended"      // Prettier 风格规则
  ],
  rules: {
    "prettier/prettier": "error",      // prettier 不符合就报错
    "@typescript-eslint/no-unused-vars": "warn", // 未使用变量警告
    "no-console": "off"                // 允许使用 console.log
  }
};
