import {Gender,Entry} from './types';

export const isString = (text:unknown):text is string => {
  return typeof text === 'string' || text instanceof String;
}

export const isDate = (date:string):boolean => {
  return Boolean(Date.parse(date));
}

export const isGender = (gend:any):gend is Gender => {
  return Object.values(Gender).includes(gend);
}

export const parseId = (id:unknown):string => {
  if(!id || !isString(id)) {
    throw new Error('Invalid or missing id');
  }
  return id;
}

export const parseName = (name:unknown):string => {
  if(!name || !isString(name)) {
    throw new Error('Invalid or missing name')
  }
  return name;
}

export const parseDate = (date:unknown):string => {
  if(!date || !isString(date) || !isDate(date)) {
    throw new Error('Invalid or missing date of birth')
  }
  return date;
}

export const parseSsn = (ssn:unknown):string => {
  if(!ssn || !isString(ssn)) {
    throw new Error('Invalid or missing ssn')
  }
  return ssn;
}

export const parseGender = (gender:unknown):Gender => {
  if(!gender || !isGender(gender)) {
    throw new Error('Invalid or missing gender')
  }
  return gender;
}

export const parseOccupation = (occupation:unknown):string => {
  if(!occupation || !isString(occupation)) {
    throw new Error('Invalid or missing occupation')
  }
  return occupation;
}

export const parseEntries = (entries:unknown):Entry[] => {
  if(!entries || !Array.isArray(entries)) {
    throw new Error('Invalid or missing entries');
  }
  return entries;
}