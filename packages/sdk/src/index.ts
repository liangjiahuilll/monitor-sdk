// SDK 入口文件
import { trackPV } from './core/behavior';
import { trackJSException } from './core/error';

export interface SDKOptions {
  pv?: boolean;
  jsError?: boolean;
}

export class MySDK {
  constructor(private options: SDKOptions = {}) {}

  init() {
    if (this.options.pv) {
      trackPV();
    }

    if (this.options.jsError) {
      trackJSException();
    }
  }
}

export default MySDK;
