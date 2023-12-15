import express from 'express';
const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
