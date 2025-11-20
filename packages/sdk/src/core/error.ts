// JS 错误监控
import { report } from '../transport/send';
import { getTimeStamp } from '../util/getTimestamp';

export function trackJSException() {
  const unhandledRejections = new Map();
  window.onerror = (msg, source, line, col, error) => {
    report({
      type: 'js_error',
      message: msg,
      filename: source,
      lineno: line,
      colno: col,
      stack: error?.stack,
      timestamp: getTimeStamp()
    });
  };

  // 捕获未处理的 Promise 拒绝
  window.addEventListener('unhandledrejection', (event) => {
    report({
      type: 'promise_error',
      message: event.reason?.message || event.reason,
      stack: event.reason?.stack,
      timestamp: getTimeStamp()
    });
  });
}
