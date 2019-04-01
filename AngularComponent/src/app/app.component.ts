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
      new Employee(1, 'Akshay', 30000),
      new Employee(2, 'Rob', 50000),
      new Employee(3, 'Shekhar', 40000)
    ];
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.employees = this.getEmployees();
  }
  onSelect(emp: Employee): void {
    this.selectedEmployee = emp;
  }
}
