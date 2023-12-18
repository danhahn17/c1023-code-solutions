import express from 'express';
const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId: number = 1;
const grades: Record<number, Grade> = {};

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.sendStatus(404);
  } else {
    const newEntry: Grade = {
      id: nextId,
      name: req.body.name,
      course: req.body.course,
      score: req.body.score,
    };
    grades[nextId] = newEntry;
    nextId++;
    res.status(201).json(newEntry);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
