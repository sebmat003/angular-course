export class UserClass implements User {
  id: number;
  firstName: string;
  lastName: string;
  age?: number | undefined;
  myType?: myType | undefined;
  role: Role;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
  myType?: myType;
  role: Role;
}

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type myType = 'jeden' | 'dwa' | 0 | 15;
