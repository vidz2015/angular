import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee portal';
  employees: Employee[];
  selectedEmployee: Employee;

  constructor() {}

  getEmployees() {
    return [
      new Employee(1, 'tinku', 30000),
      new Employee(2, 'Punku', 50000),
      new Employee(3, 'chikki', 40000)
    ];
  }
  OnInit(): void {
    this.employees = this.getEmployees();
  }
  onSelect(emp: Employee): void {
    this.selectedEmployee = emp;
  }
}
