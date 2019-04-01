import { Injectable } from '@angular/core';
import { EMPLOYEE } from './mock-employees';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees(): Employee[] {
    return EMPLOYEE;
  }
}
