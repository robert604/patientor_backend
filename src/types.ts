export type Diagnose = {
  code:string,
  name:string,
  latin?:string
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type Patient = {
  id:string,
  name:string,
  dateOfBirth:string,
  ssn:string,
  gender:Gender,
  occupation:string,
  entries:Entry[]
}


type UnknownPropTypes<T> = {[k in keyof T]:unknown};

export type PublicPatient = Omit<Patient,'id' | 'entries'>;
export type NewPatient = Omit<Patient,'id' | 'entries'>;

export type UnparsedPatient = UnknownPropTypes<Patient>;
export type UnparsedPublicPatient = UnknownPropTypes<PublicPatient>;
export type UnparsedNewPatient = UnknownPropTypes<NewPatient>;



export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

/*export enum EntryType {
  "HealthCheck" = 0,
  "OccupationalHealthcare" = 1,
  "Hospital" = 2
}*/

export const entryTypes = ["HealthCheck","OccupationalHealthcare","Hospital"];

export interface BaseEntry {
  type:string,
  id: string,
  description: string,
  date: string,
  specialist: string,
  diagnosisCodes?: string[],
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?:{
    startDate:string,
    endDate:string
  }
}

export interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {
    date: string,
    criteria: string,
  }
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export type UnparsedBaseEntry = UnknownPropTypes<BaseEntry>;

type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

export type EntryWithoutId = UnionOmit<Entry, 'id'>;