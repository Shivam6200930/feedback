import express from 'express';
import feedbackRoutes from './routers/feedbackRoutes';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
