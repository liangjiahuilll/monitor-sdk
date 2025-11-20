// 上报网络请求封装
export function report(data: any) {
  if (typeof navigator.sendBeacon === 'function') {
    // navigator.sendBeacon('http//xxxx')
    console.log('使用 sendBeacon 上报数据:', data);
  } else {
    // fetch('http//xxxx', {
      
    // })
  }
}
