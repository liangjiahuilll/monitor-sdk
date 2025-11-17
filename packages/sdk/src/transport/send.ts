// 上报网络请求封装 TODO: 补充类型
export function report(data: unknown) {
  console.log(data);
  if (typeof navigator.sendBeacon === 'function') {
    navigator.sendBeacon('http//xxxx');
  } else {
    fetch('http//xxxx', {});
  }
}
