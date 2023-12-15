import express from 'express';
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use((req, res) => {
  console.log(req.method);
  res.send('Me llamo Daniel');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
