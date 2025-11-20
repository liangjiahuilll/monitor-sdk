import { report } from '../transport/send';

// （导航到load结束的各阶段性能，不包括渲染）
function trackNavigationTime() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (!nav) return;

      report({
        type: 'performance',
        dns: nav.domainLookupEnd - nav.domainLookupStart,
        tcp: nav.connectEnd - nav.connectStart,
        // 从发出请求到接收到第一个响应字节
        ttfb: nav.responseStart - nav.requestStart,
        // HTML下载耗时（不是 DOM 渲染，是内容下载）
        htmlLoad: nav.responseEnd - nav.responseStart,
        // DOM Ready（导航开始到DOM构建完毕）
        domReady: nav.domContentLoadedEventEnd - nav.startTime,
        // 完整页面加载（导航开始到load事件结束）
        load: nav.loadEventEnd - nav.startTime
      });
    });
  });
}



//FCP LCP FP
function trackPaintTime() {
  // @ts-ignore
  const paintObserver = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach((entry: any) => {
      if (entry.name === 'first-paint') {
        report({
          type: 'performance',
          fp: entry.startTime
        });
      }
      if (entry.name === 'first-contentful-paint') {
        report({
          type: 'performance',
          fcp: entry.startTime
        });
      }
    });
  });
  paintObserver.observe({ type: 'paint', buffered: true });

  const lcpObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lcp = entries[entries.length - 1] as any;

    report({
      type: 'performance',
      lcp: lcp.startTime
    });
  });
  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
}



// 资源加载耗时
function trackResourceTime() {
  window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

    resources.forEach((res) => {
      report({
        type: 'resource',
        name: res.name,  //资源的完整URL地址
        initiator: res.initiatorType, // script/css/img/font/xhr
        duration: res.duration,  //时长
        transferSize: res.transferSize, //数据大小（如果是本地缓存或者磁盘缓存都是0，包含header和body）
        encodedBodySize: res.encodedBodySize, //压缩后的body大小
        decodedBodySize: res.decodedBodySize //解压后的body大小
      });
    });
  });
}

export function trackPerf() {
  trackNavigationTime()
  trackPaintTime()
  trackResourceTime()
}
