import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random().toString();

try {
  await writeFile('random.txt', randomNumber + '\n', 'utf-8');
} catch (error) {
  console.log(error);
}
