import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Empbank } from "./empbank";
import { Salary } from './salary';
import { Sumsalary } from './sumsalary'
import { Companybal } from './companybal'
import { Variable } from './variable';
import { Grade } from './grade';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  acc="123456";



  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employee`);
  }

  getCompanybal(): Observable<Companybal[]>{
    return this.httpClient.get<Companybal[]>(`${this.baseURL}/companybank`);
  }

  getTransferbalance(accn:string): Observable<string>{
    return this.httpClient.get<string>(`${this.baseURL}/transfer/initiateTransfer/${accn}`);
  }

  getTranBalToC(accn:string,bal:number): Observable<string>{
    return this.httpClient.get<string>(`${this.baseURL}/companybank/Addbalance/${accn}/${bal}`);
  }



  getValidate(accn:string): Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.baseURL}/transfer/validatev2/${accn}`);
  }

  getSalaryList(): Observable<Salary[]>{
    return this.httpClient.get<Salary[]>(`${this.baseURL}/salary`);
  }

  getSumsalary(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/salary/gettotal`);
  }



  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/employee/addemployee`, employee);
  }

  createEmployeev2(empbank: Empbank): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/employee/addemployee/v2`, empbank);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employee/fetchemployee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/employee/${id}`);
  }

  getAllGrade(): Observable<Grade[]>{
    return this.httpClient.get<Grade[]>(`${this.baseURL}/grade`);
  }

  addMiniGrade(basic: number): Observable<Grade[]>{
    return this.httpClient.get<Grade[]>(`${this.baseURL}/grade/lowestgrade/${basic}`);
  }
  allGrade(): Observable<Grade[]>{
    return this.httpClient.get<Grade[]>(`${this.baseURL}/grade`);
  }

  getPaidSal(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/paidsalary`);
  }
}
