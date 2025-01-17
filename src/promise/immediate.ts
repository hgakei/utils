/**
 * 推迟执行promise
 * @param value
 */
async function immediate<T>(value: T): Promise<T>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function immediate<T>(): Promise<void>;
async function immediate(value?: any) {
  return new Promise((resolve) => setImmediate(() => resolve(value)));
}

export default immediate;
