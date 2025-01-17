/**
 * 格式化时间间隔
 * @param runningTime
 */
function parseTimeRange(runningTime: number) {
  const time = +(runningTime / 1000).toFixed(1);
  if (time <= 0) {
    return '0秒';
  } else if (time < 60) {
    return `${time}秒`;
  } else if (time < 3600) {
    return `${(time / 60).toPrecision(2)}分钟`;
  } else if (time < 86400) {
    return `${(time / 3600).toPrecision(2)}小时`;
  }
  return `${(time / 86400).toPrecision(2)}天`;
}

export default parseTimeRange;
