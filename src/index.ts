import express from 'express';
import cors from 'cors';
import feedbackRoutes from './routers/feedbackRoutes';

const app = express();
const port = 5000;

// Enable CORS with specific options
const corsOptions = {
  origin: 'https://feedback-frontend-puce.vercel.app', 
  methods: 'GET,POST', 
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());
app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
