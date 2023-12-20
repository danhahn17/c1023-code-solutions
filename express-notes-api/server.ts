import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';
type Note = {
  id: number;
  content: string;
};
type Data = {
  nextId: number;
  notes: Record<number, Note>;
};
const app = express();
app.use(express.json());
async function read(): Promise<Data> {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}
async function write(data: Data): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}
app.get('/api/notes', async (req, res) => {
  try {
    const data = await read();
    res.json(Object.values(data.notes));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});
app.get('/api/notes/:id', async (req, res) => {
  try {
    const id = +req.params.id;
    const data = await read();
    if (!(id in data.notes)) {
      res.status(404).json({ error: `${id} not found` });
      return;
    }
    res.json(data.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});
app.post('/api/notes', async (req, res) => {
  try {
    const content: string = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Hey dummy, send some content!' });
      return;
    }
    const data = await read();
    const note = { id: data.nextId, content };
    data.notes[data.nextId] = note;
    data.nextId++;
    await write(data);
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});
app.put('/api/notes/:id', async (req, res) => {
  try {
    const content: string = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Hey dummy, send some content!' });
      return;
    }
    const data = await read();
    const id = +req.params.id;
    if (!(id in data.notes)) {
      res.status(404).json({ error: `${id} not found` });
      return;
    }
    data.notes[id].content = content;
    await write(data);
    res.status(201).json(data.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await read();
    const id = +req.params.id;
    if (!(id in data.notes)) {
      res.status(404).json({ error: `${id} not found` });
      return;
    }
    delete data.notes[id];
    await write(data);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});
app.listen(8080, () => {
  console.log('listening on port 8080');
});
