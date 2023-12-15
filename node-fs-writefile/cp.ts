import { readFile, writeFile } from 'node:fs/promises';

const [, , source, dest] = process.argv;

try {
  const contents = await readFile(source);
  await writeFile(dest, contents);
} catch (error) {
  console.error(error);
  process.exit(1);
}
