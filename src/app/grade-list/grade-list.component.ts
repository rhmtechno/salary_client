import { Component, OnInit } from '@angular/core';
import { Grade } from '../grade'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  grades: Grade[];

  mgb:number;

  constructor(public employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.allGrade();
  }

 
  mgradeBasic() {
console.log(this.mgb);
this.addMiniGrade();

   
  }

  private addMiniGrade(){
    this.employeeService.addMiniGrade(this.mgb).subscribe(data => {
      this.grades = data;
    });
    
  }
  private allGrade(){
    this.employeeService.allGrade().subscribe(data => {
      this.grades = data;
    });
    
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
