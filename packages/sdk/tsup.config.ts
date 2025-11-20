import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  outDir: 'dist',
  globalName: 'sdk', // ✅ 明确设置浏览器全局变量名
  clean: true,
})
