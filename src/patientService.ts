import patientsData from '../data/patients.json';
import { NewPatient,UnparsedNewPatient,Patient, UnparsedPatient } from "./types";
import { parseDate, parseGender, parseId, parseName, parseOccupation, parseSsn } from "./utils";
import {v1 as uuid} from 'uuid';

export const toPatient = (obj:UnparsedPatient):Patient => {
  const patient:Patient = {
    id:parseId(obj.id),
    name:parseName(obj.name),
    dateOfBirth:parseDate(obj.dateOfBirth),
    ssn:parseSsn(obj.ssn),
    gender:parseGender(obj.gender),
    occupation:parseOccupation(obj.occupation),
  }
  return patient;
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

const patients:Patient[] = patientsData.map(pd => toPatient(pd));

export const getPatients = ():Patient[] => {
  return patients;
}