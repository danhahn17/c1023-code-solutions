/**
 * Simulates a network call by delaying for one second and returning a message.
 * If `doReject` is truthy, it will reject the Promise, otherwise it will resolve.
 * Uses `setTimeout` to mimic a slow network connection.
 */
export function read(url: string, doResolve = true): Promise<string> {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () =>
        doResolve
          ? resolve(`read ${url}`)
          : reject(new Error(`rejected ${url}`)),
      1000
    );
  });
}
