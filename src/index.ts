import express from 'express';
const cors = require('cors');
import { Diagnose } from './types';
import diagnoses from '../data/diagnoses.json';

const app = express();
app.use(express.json());
app.use(cors())

const PORT = 3001;

app.get('/api/ping',(req,res) => {
  console.log('got a ping');
  res.send('pong');
})

app.get('/api/diagnoses',(req,res) => {
  console.log('got req diagnoses');
  const diags:Diagnose[] = diagnoses
  res .send(diags)
})

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})