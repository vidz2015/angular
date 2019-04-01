import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee portal';
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private dataService: DataService) {}

  getEmployees() {
    /* return [
      new Employee(1, 'Akshay', 30000),
      new Employee(2, 'Rob', 50000),
      new Employee(3, 'Shekhar', 40000)
    ]; */
    // Now we will pull data from service
    // this.dataService.getEmployee() will return Promise,
    // so we must use .then(...) to resolve returned data as Employee[].
    return this.dataService
      .getEmployees()
      .then(employees => (this.employees = employees));
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.getEmployees();
  }
  onSelect(emp: Employee): void {
    this.selectedEmployee = emp;
  }
}
