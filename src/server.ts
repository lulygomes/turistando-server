import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes'

import createConnection from './database';

createConnection();

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)

const port = 3333;

app.listen(port, () => console.log(`server on port ${port}`))