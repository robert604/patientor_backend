import patientsData from '../data/patients';
import { PublicPatient,UnparsedPublicPatient,Patient, UnparsedPatient, UnparsedNewPatient,NewPatient,
  BaseEntry,UnparsedBaseEntry,Entry, HealthCheckEntry, HealthCheckRating,
  OccupationalHealthcareEntry,HospitalEntry } from "./types";
import { parseEntryType, parseDate, parseDescription, parseEntries, parseGender, parseHealthCheckRating, parseId, parseName, parseOccupation, parseSpecialist, parseSsn, parseString, parseDischarge } from "./utils";
import {v1 as uuid} from 'uuid';

export const toPatient = (obj:UnparsedPatient):Patient => {
  const patient:Patient = {
    id:parseId(obj.id),
    name:parseName(obj.name),
    dateOfBirth:parseDate(obj.dateOfBirth),
    ssn:parseSsn(obj.ssn),
    gender:parseGender(obj.gender),
    occupation:parseOccupation(obj.occupation),
    entries:parseEntries(obj.entries),
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
  const newPatient:Patient = {...np,id:uuid(),entries:[]}
  patients.push(newPatient)
  return newPatient
}

const patients:Patient[] = patientsData.map(pd => toPatient({...pd}));

export const getPatients = ():Patient[] => {
  return patients;
}

export const findPatientById = (id:string):Patient | undefined => {
  const patient = patients.find(p => p.id===id);
  return patient;
}

export const toEntry =(obj:any):Entry => {
  const baseEntry:BaseEntry = {
    type : parseEntryType(obj.type),
    id: parseId(obj.id),
    description: parseDescription(obj.id),
    date: parseDate(obj.date),
    specialist: parseSpecialist(obj.specialist),
  }
  if(baseEntry.type==="HealthCheck") {
    const hc_entry:HealthCheckEntry = { ...baseEntry,
      type:"HealthCheck",
      healthCheckRating:parseHealthCheckRating(obj.healthCheckRating)
    };      
    return hc_entry;
  }
  if(baseEntry.type==="OccupationalHealthcare") {
    const oh_entry:OccupationalHealthcareEntry = { ...baseEntry,
      type:"OccupationalHealthcare",
      employerName:parseString(obj.employerName)
    }
    return oh_entry;
  }
  if(baseEntry.type==="Hospital") {
    const h_entry:HospitalEntry = { ...baseEntry,
      type:"Hospital",
      discharge:parseDischarge(obj.discharge)
    };      
    return h_entry;
  }
  throw new Error('Invalid type for Entry ' + typeof obj);
}

export const addNewEntryByPatientId = (patientId:string,entry:any):Entry => {
  const newEntry:Entry = entry;
  const patient = findPatientById(patientId);
  if(!patient) throw new Error(`Invalid patient id ${patientId}`);
  patient.entries.push(newEntry);
  return newEntry;
}