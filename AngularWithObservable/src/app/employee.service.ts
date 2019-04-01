import { Injectable } from '@angular/core';
import { EMPLOYEE } from './mock-employees';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEE);
  }
}
