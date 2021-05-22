import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Salary } from '../salary'
import { Sumsalary } from '../sumsalary'
import { Companybal } from '../companybal'


@Component({
  selector: 'app-transfersal-list',
  templateUrl: './transfersal-list.component.html',
  styleUrls: ['./transfersal-list.component.css']
})
export class TransfersalListComponent implements OnInit {

  companybal:Companybal[];
    salaryes: Salary[];
  sumsalary:number;
  accnum:string;
  carbal:number; 


  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   
    this.getSumsalary();
    this.getCompanybal();
    this.accnum = this.route.snapshot.params['accn'];
    this.carbal = this.route.snapshot.params['carbal'];
  }

  private getSumsalary(){
    this.employeeService.getSumsalary().subscribe(data => {
      this.sumsalary = data;
      console.log(this.sumsalary);
    });
  }

  private getCompanybal(){
    this.employeeService.getCompanybal().subscribe(data => {
      this.companybal = data;
    });
  }

  transferbalance(){

    this.employeeService.getTransferbalance(this.accnum).subscribe(data => {
      //this.companybal = data;
    });

    this.router.navigate(['salarysheet']);
    
  }
 
}
