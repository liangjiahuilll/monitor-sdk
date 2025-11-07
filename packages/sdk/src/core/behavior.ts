// 用户行为
import { report } from '../transport/send'
import { getTimeStamp } from '../util/getTimestamp'

export function trackPV() {
  // Date.now()返回系统本地时间，所以用以下方案高精度计算时间
  report({
    type: 'pv',
    url: window.location.href,
    timestamp: getTimeStamp(),
  })
}
