import express from 'express';
const cors = require('cors');
import { Diagnose,Patient } from './types';
import diagnosesData from '../data/diagnoses.json';

import { addNewPatient, findById, getPatients } from './patientService';

const app = express();
app.use(express.json());
app.use(cors())

const PORT = 3001;

const patients = getPatients();
const diagnoses:Diagnose[] = diagnosesData;



app.get('/api/ping',(req,res) => {
  console.log('got a ping');
  res.send('pong');
})

app.get('/api/diagnoses',(req,res) => {
  console.log('got req diagnoses');
  const diags:Diagnose[] = diagnoses
  res.json(diags)
})

app.get('/api/patients',(req,res) => {
  console.log('got req for patients');
  const pats:Omit<Patient,"ssn">[] = patients.map(p => {
    const {ssn,...withoutSsn} = p;
    return withoutSsn;
  });
  res.json(pats)
})

app.post('/api/patients',(req,res) => {
  try {
    const newPatient = addNewPatient(req.body);
    res.json(newPatient);
  } catch(error) {
    let errorMessage = 'Unexpected error when adding new patient';
    if(error instanceof Error) errorMessage += ' Error: ' + error.message;
    res.status(400).send(errorMessage);
  }
})

app.get('/api/patients/:id',(req,res) => {
  try {
    const id = req.params.id;
    const patient = findById(id);
    if(patient) res.status(200).json(patient);
    else res.status(400).send('Invalid patient id');
  } catch(error) {
    let errorMessage = 'Unexpected error when getting patient data';
    if(error instanceof Error) errorMessage += ' Error: ' + error.message;
    res.status(400).send(errorMessage);
  }
})

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})