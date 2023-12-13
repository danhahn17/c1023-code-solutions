import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

// function throwOnce(): Promise<void> {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log the entire error so that
//   // you get the stack trace.
//   return read('foo', false)
//     .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
//     .catch((error) =>
//       console.log(elapsed(), 'throwOnce Error:', error.message)
//     );
// }

async function throwOnce(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const msg = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }
}

async function throwSeveral(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const msg = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', msg);
    const msg1 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', msg1);
    const msg2 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', msg2);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }
}

async function throwChained(): Promise<void> {
  try {
    const msg1 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg1);
    const msg2 = await read(msg1, false);
    console.log(elapsed(), 'throwChained2:', msg2);
    const msg3 = await read(msg2, false);
    console.log(elapsed(), 'throwChained3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();
