import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
import { Empbank } from "../empbank";
@Component({
  selector: 'app-welcome-list',
  templateUrl: './welcome-list.component.html',
  styleUrls: ['./welcome-list.component.css']
})
export class WelcomeListComponent implements OnInit {

  employees: Employee[];
  empbank:Empbank[];


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();

    })

    console.log(id);
  }
}
