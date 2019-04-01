import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEE } from './mock-employees';
@Injectable()
export class DataService {
  constructor() {}
  // A Promise is used to make the DataService to be an Async services that supports a call back when the processing is done.
  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEE);
  }
}
