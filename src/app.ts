import * as dotenv from 'dotenv-safe'
dotenv.config()

import cors from 'cors';
import express from 'express';


import autenticacaoRota from './routes/authenticationRoutes'

import * as db from './database/mongoConfig'

import customersRoutes from '../src/routes/customersRoutes'

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/customers", customersRoutes);
app.use("/auth", autenticacaoRota);
db.connect();
export default app
