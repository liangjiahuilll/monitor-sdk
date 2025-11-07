// 上报网络请求封装
export function report(data: any) {
  if (typeof navigator.sendBeacon === 'function') {
    navigator.sendBeacon('http//xxxx')
  } else {
    fetch('http//xxxx', {
      
    })
  }
}
