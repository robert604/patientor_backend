import patientsData from '../data/patients.json';
import { NewPatient,UnparsedNewPatient,Patient } from "./types";
import { parseDate, parseGender, parseName, parseOccupation, parseSsn } from "./utils";
import {v1 as uuid} from 'uuid';

const patients:Patient[] = patientsData;

export const getPatients = ():Patient[] => {
  return patients;
}

export const toNewPatient = (obj:UnparsedNewPatient):NewPatient => {
  const newPatient:NewPatient = {
    name:parseName(obj.name),
    dateOfBirth:parseDate(obj.dateOfBirth),
    ssn:parseSsn(obj.ssn),
    gender:parseGender(obj.gender),
    occupation:parseOccupation(obj.occupation),
  }
  return newPatient;
}

export const addNewPatient = (patientData:UnparsedNewPatient):Patient => {
  const np:NewPatient = toNewPatient(patientData);
  const newPatient:Patient = {...np,id:uuid()}
  patients.push(newPatient)
  return newPatient
}

