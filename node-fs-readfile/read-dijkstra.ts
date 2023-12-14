import beep from 'node:fs/promises';

async function readDijkstra(): Promise<void> {
  try {
    const contents: string = await beep.readFile('dijkstra.txt', 'utf-8');
    console.log(contents);
  } catch (error) {
    console.log(error);
  }
}

readDijkstra();
