import 'reflect-metadata';
import express, { response } from 'express';
import createConnection from './database';

createConnection();

const app = express();

app.use(express.json())

app.use('/', (request, response) => (
  response.json({ ok: true })
))

const port = 3333;

app.listen(port, () => console.log(`server on port ${port}`))