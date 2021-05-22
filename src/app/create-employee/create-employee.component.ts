import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Empbank } from '../empbank';
import { Grade } from '../grade';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gradeid:number;
  grade: Grade[];
  empbank: Empbank = new Empbank();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllGrade();
  }

  saveEmployee(){
    this.employeeService.createEmployeev2(this.empbank).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.empbank);
   this.saveEmployee();
  }

  selectGradeChange(event:any){
this.gradeid=event.target.value;
console.log(this.gradeid);
  }


  getAllGrade() {
    this.employeeService.getAllGrade().subscribe(
      (data: Grade[]) => {
        this.grade = data;
      }
    );
    console.log(this.grade);
  }
}
