import express from 'express';
const cors = require('cors');
import { Diagnose,Patient } from './types';
import diagnoses from '../data/diagnoses.json';
import patients from '../data/patients.json';

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
  res.send(diags)
})

app.get('/api/patients',(req,res) => {
  console.log('got req for patients');
  const pats:Omit<Patient,"ssn">[] = patients.map(p => {
    const {ssn,...withoutSsn} = p;
    return withoutSsn;
  });
  res.send(pats)
})

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})