import fs from 'fs';
import path from 'path';
import { SourceMapConsumer } from 'source-map';

const DIST_PATH = path.resolve(process.cwd(), 'dist');

export async function resolveSourceMap({ filename, lineno, colno }) {
  try {
    const mapPath = path.join(DIST_PATH, filename + '.map');

    if (!fs.existsSync(mapPath)) {
      return { ok: false, error: 'sourceMap 不存在: ' + mapPath };
    }

    const rawMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));

    const res = await SourceMapConsumer.with(rawMap, null, (consumer) => {
      return consumer.originalPositionFor({ line: lineno, column: colno });
    });

    return {
      ok: true,
      source: res.source,
      line: res.line,
      column: res.column,
      name: res.name
    };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
