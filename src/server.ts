import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import createConnection from './database';

createConnection();

const app = express();

app.use(cors());
app.use(express.json())

app.use('/', (request, response) => (
  response.json({ ok: true })
))

const port = 3333;

app.listen(port, () => console.log(`server on port ${port}`))