import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Variable } from '../variable'
import { Companybal } from '../companybal';
import { Salary } from '../salary';






@Component({
  selector: 'app-combank-list',
  templateUrl: './combank-list.component.html',
  styleUrls: ['./combank-list.component.css']
})
export class CombankListComponent implements OnInit {

  companybal:Companybal[];
  salaryes: Salary[];
sumsalary:number;
accnum:string;
carbal:number; 


constructor(private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router) { }

ngOnInit(): void {
 
  this.getCompanybal();
  this.accnum = this.route.snapshot.params['accn'];
  this.carbal = this.route.snapshot.params['carbal'];
}



private getCompanybal(){
  this.employeeService.getCompanybal().subscribe(data => {
    this.companybal = data;
  });
}

transferbalance(){

  this.employeeService.getTranBalToC(this.accnum,this.sumsalary).subscribe(data => {
    //this.companybal = data;
  });

  this.router.navigate(['salaryes']);
  
}
 
}
