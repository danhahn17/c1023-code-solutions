import beepboop from 'node:fs/promises';

async function readAnyFile(): Promise<void> {
  try {
    const filePath = process.argv[2];
    const contents: string = await beepboop.readFile(filePath, 'utf-8');
    console.log(contents);
  } catch (error) {
    console.log(error);
  }
}

readAnyFile();
