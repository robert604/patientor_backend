
import {Gender,Entry, HealthCheckRating, EntryType} from './types';

export const assertNever = (x: never):never => {
  throw new Error("Unexpected type: " + typeof x);
};

export const isString = (text:unknown):text is string => {
  return typeof text === 'string' || text instanceof String;
}

export const isDate = (date:string):boolean => {
  return Boolean(Date.parse(date));
}

export const isGender = (gend:any):gend is Gender => {
  return Object.values(Gender).includes(gend);
}

export const parseString = (text:unknown):string => {
  if(!text || !isString(text)) {
    throw new Error('Expected String type');
  }
  return text;
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

export const parseDescription = (desc:unknown):string => {
  if(!desc || !isString(desc)) {
    throw new Error('Invalid or missing description');
  }
  return desc;
}

export const parseSpecialist = (spec:unknown):string => {
  if(!spec || !isString(spec)) {
    throw new Error('Invalid or missing description');
  }
  return spec;
}

export const isHealthCheckRating = (rating:any):rating is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(rating);
}

export const parseHealthCheckRating = (rating:unknown):HealthCheckRating => {
  if(!rating || !isHealthCheckRating(rating)) {
    throw new Error('Invalid or missing HealthCheckRating')
  }
  return rating;
}

export const parseEntryType = (entryType:any):EntryType => {
  if(!Object.values(EntryType).includes(entryType)) {
    throw new Error("Invalid or missing EntryType");
  }
  return entryType;
}

export const parseDischarge = (discharge:any):{date:string,criteria:string} => {
  if(!discharge || !discharge.date || !discharge.criteria
    || !(discharge.date instanceof String) || !(discharge.criteria instanceof String)) {
      throw new Error('Invalid or missing discharge info');
    }
  return discharge;
}
