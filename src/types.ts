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
  occupation:string
}

export type NewPatient = Omit<Patient,'id'>

export type UnparsedPatient = {
  id:unknown,
  name:unknown,
  dateOfBirth:unknown,
  ssn:unknown,
  gender:unknown,
  occupation:unknown
}

export type UnparsedNewPatient = Omit<UnparsedPatient,'id'>
