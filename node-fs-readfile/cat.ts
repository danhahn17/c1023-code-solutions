import beepboopbeep from 'node:fs/promises';

async function readAnyFile(): Promise<void> {
  try {
    const args = process.argv.slice(2);
    const promiseArray = args.map((commandLine) =>
      beepboopbeep.readFile(commandLine, 'utf-8')
    );
    const contents = await Promise.all(promiseArray);
    const finalContent = contents.join();
    console.log(finalContent);
  } catch (error) {
    console.log(error);
  }
}

readAnyFile();
