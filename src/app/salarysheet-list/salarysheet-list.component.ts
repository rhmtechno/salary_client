import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
import { Salary } from '../salary'
import { Sumsalary } from '../sumsalary'
import { Companybal } from '../companybal'




@Component({
  selector: 'app-salarysheet-list',
  templateUrl: './salarysheet-list.component.html',
  styleUrls: ['./salarysheet-list.component.css']
})
export class SalarysheetListComponent implements OnInit {

    companybal:Companybal[];
    salaryes: Salary[];
    sumsalary:number;
    validate:boolean;
    //validate=false;

    


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
   this.validate=true;
    this.getSalary();
    this.getSumsalary();
    
  }

  private getCompanybal(){
    this.employeeService.getCompanybal().subscribe(data => {
      this.companybal = data;
    });
  }

  // private getValidate(){
  //   this.employeeService.getValidate().subscribe(data => {
  //     this.validate = data;
  //     console.log(this.validate);
  //   });
  // }

  companyDetails(){
    //this.getValidate();
    this.getCompanybal();
    
  }


  private getSalary(){
    this.employeeService.getSalaryList().subscribe(data => {
      this.salaryes = data;
    });
  }

  private getSumsalary(){
    this.employeeService.getSumsalary().subscribe(data => {
      this.sumsalary = data;
      console.log(this.sumsalary);
    });
  }



  transfervalidate(accn: string,carbal:number){
    this.employeeService.getValidate(accn).subscribe(data => {
      this.validate = data;
      console.log(this.validate);

      if(this.validate)
      {

        this.router.navigate(['transfersal', accn,carbal]);
      }
      else{
        this.router.navigate(['combank', accn,carbal]);
      }
    });
  }

 
}
