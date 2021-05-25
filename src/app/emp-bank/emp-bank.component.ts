import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
import { Salary } from '../salary'
import { Sumsalary } from '../sumsalary'
import { Companybal } from '../companybal'
import { Empaccounts } from '../empaccounts'




@Component({
  selector: 'app-emp-bank',
  templateUrl: './emp-bank.component.html',
  styleUrls: ['./emp-bank.component.scss']
})
export class EmpBankComponent implements OnInit {


  empaccounts:Empaccounts[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  this.getEmployees();

  }


  private getEmployees(){
    this.employeeService.getEmployBankList().subscribe(data => {
      this.empaccounts = data;
    });
  }
}
