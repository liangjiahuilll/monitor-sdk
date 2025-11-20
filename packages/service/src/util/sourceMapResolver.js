import fs from 'fs'
import path from 'path'
import {SourceMapConsumer} from 'source-map'

const DIST_PATH = path.resolve(process.cwd(), 'dist')

export async function resolveSourceMap({ filename, lineno, colno }) {
  try{
    const mapFilePath = path.join(DIST_PATH, filename + '.map')
    if(!fs.existsSync(mapFilePath)){
      return {
        ok: false,
        error: 'map文件不存在' + mapFilePath
      }
    }

    const rawMap = JSON.parse(fs.readFileSync(mapFilePath, 'utf-8'))

    const parseResult = await SourceMapConsumer.with(
       rawMap,
      null,
      (consumer) => {
        return consumer.originalPositionFor({
          line: lineno,
          column: colno
        });
      }
    )
    return {
      ok: true,
      source: parseResult.source,
      line: parseResult.line,
      column: parseResult.column,
      name: parseResult.name
    };

  } catch(err){

  }
} 