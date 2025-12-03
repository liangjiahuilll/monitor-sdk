export const getTimeStamp = function () {
  if (performance.timeOrigin) {
    return performance.timeOrigin + performance.now();
  } else if (performance.timing.navigationStart) {
    return performance.timing.navigationStart + performance.now();
  } else {
    return Date.now();
  }
};
