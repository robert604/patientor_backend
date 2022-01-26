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

export type Entry = {

}

type UnknownPropTypes<T> = {[k in keyof T]:unknown};

export type PublicPatient = Omit<Patient,'id' | 'entries'>;
export type NewPatient = Omit<Patient,'id' | 'entries'>;

export type UnparsedPatient = UnknownPropTypes<Patient>;
export type UnparsedPublicPatient = UnknownPropTypes<PublicPatient>;
export type UnparsedNewPatient = UnknownPropTypes<NewPatient>;