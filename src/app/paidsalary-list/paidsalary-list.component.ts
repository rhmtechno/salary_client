import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Variable } from '../variable'
import { Companybal } from '../companybal';
import { Salary } from '../salary';
import { Routes, RouterModule } from '@angular/router';






@Component({
  selector: 'app-paidsalary-list',
  templateUrl: './paidsalary-list.component.html',
  styleUrls: ['./paidsalary-list.component.css']
})
export class PaidsalaryListComponent implements OnInit {

    paidsalary:number;
    accnum:string;
    sumsalary:number;
    companybal:Companybal[];

constructor(private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router) { }

ngOnInit(): void {
    this.getCompanybal();
    this.getPaidSal();
}

private getCompanybal(){
    this.employeeService.getCompanybal().subscribe(data => {
      this.companybal = data;
    });

  }

  private getPaidSal(){
    this.employeeService.getPaidSal().subscribe(data => {
      this.paidsalary = data;
    });

  }

show(acc:string){
    this.accnum=acc;
}


  isShown: boolean = false ; // hidden by default


  toggleShow() {

  this.isShown = ! this.isShown;

  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  transferbalance(){
    this.employeeService.getTranBalToC(this.accnum,this.sumsalary).subscribe(data => {
        //this.companybal = data;
      });

      this.getCompanybal();
      this. reloadCurrentRoute();
  }

}
