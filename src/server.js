// src/server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { connectMongoDB } from './db/connectMongoDB.js';
import {logger} from './middleware/logger.js';
import {notFoundHandler} from './middleware/notFoundHandler.js';
import {errorHandler} from './middleware/errorHandler.js';

import studentsRoutes from './routes/studentsRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(studentsRoutes);

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
