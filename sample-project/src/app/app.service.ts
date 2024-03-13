import { Injectable } from '@angular/core';
import { Role, User, UserType } from './app.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SampleService {
  getUser(): User {
    // mock data
    return {
      id: 1,
      firstName: 'Jan',
      lastName: 'Kowalski',
      myType: 15,
      role: Role.ADMIN,
    };
  }

  getUsers(): User[] {
    return [
      {
        id: 1,
        firstName: 'Jan',
        lastName: 'Kowalski',
        myType: 15,
        role: Role.ADMIN,
      },
      {
        id: 2,
        firstName: 'Elżbieta',
        lastName: 'Nowak',
        myType: 15,
        age: 25,
        role: Role.USER,
      },
    ];
  }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products/1');
  }
}
