import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
