import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeservice: EmployeeService) {}

  ngOnInit() {
    this.employeeservice
      .getEmployees()
      .subscribe(employees => (this.employees = employees));
  }
}
