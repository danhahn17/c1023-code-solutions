// SOLUTION SKELETON:
// read
// create "note to add"
// update #: "new note contents"
// delete #

// Get arguments from the command line (1st part: command, 2nd part: depends on command)

// Switch on command line:
// read: read data.json, log notes
// create: read data.json, add the note with nextId, write data.json, increment nextId
// update: read data.json, update note with command nextId, write data.json
// delete: read data.json, delete note with command nextId, write data.json

import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , command, arg1, arg2] = process.argv;

try {
  switch (command) {
    case 'read':
      await readText();
      break;
    case 'create':
      await createText(arg1);
      break;
    case 'update':
      await updateText(arg1, arg2);
      break;
    case 'delete':
      await deleteText(arg1);
      break;
    default:
      console.log('Incorrect command.');
      process.exit(1);
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function readText(): Promise<void> {
  try {
    const contents: string = await readFile('data.json', 'utf-8');
    const object: Data = JSON.parse(contents);
    for (const id in object.notes) {
      console.log(`${id}: ${object.notes[id]}`);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function createText(note: string): Promise<void> {
  if (!note) {
    console.log('No note specified.');
    process.exit(1);
  }
  const contents: string = await readFile('data.json', 'utf-8');
  const object: Data = JSON.parse(contents);
  object.notes[object.nextId] = note;
  object.nextId++;
  await writeFile('data.json', JSON.stringify(object, null, 2), 'utf-8');
}

async function updateText(id: string, note: string): Promise<void> {
  const contents: string = await readFile('data.json', 'utf-8');
  const object: Data = JSON.parse(contents);
  if (!(id in object.notes)) {
    console.log(`${id} does not exist.`);
    process.exit(1);
  }
  if (!note) {
    console.log('No note specified.');
    process.exit(1);
  }
  object.notes[id] = note;
  await writeFile('data.json', JSON.stringify(object, null, 2), 'utf-8');
}

async function deleteText(id: string): Promise<void> {
  const contents: string = await readFile('data.json', 'utf-8');
  const object: Data = JSON.parse(contents);
  if (!(id in object.notes)) {
    console.log(`${id} does not exist.`);
    process.exit(1);
  }
  delete object.notes[id];
  await writeFile('data.json', JSON.stringify(object, null, 2), 'utf-8');
}
