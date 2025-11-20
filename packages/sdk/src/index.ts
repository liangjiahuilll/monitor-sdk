// SDK 入口文件
import { trackPV } from "./core/behavior";
import { trackJSException } from "./core/error"
import { trackPerf } from "./core/perf"

export interface SDKOptions {
  pv?: boolean;
  jsError?: boolean;
}

export class MySDK {
  constructor(private options: SDKOptions = {}) {}

  init() {
      trackPV();

      trackJSException();

      trackPerf()
  }
}

// @ts-ignore
if (typeof window !== "undefined") {
  // @ts-ignore
  window.sdk = { MySDK };
}