import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee = { id: 1, name: 'Akshay', salary: 42000 };
  constructor() {}

  ngOnInit() {}
}
