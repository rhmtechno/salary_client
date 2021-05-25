import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {SalaryListComponent} from './salary-list/salary-list.component';
import { CombankListComponent } from './combank-list/cmobank-list.component';
import { TransfersalListComponent } from './transfersal-list/transfersal-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { SalarysheetListComponent } from './salarysheet-list/salarysheet-list.component';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { WelcomeListComponent } from './welcome/welcome-list.component';
import { PaidsalaryListComponent } from './paidsalary-list/paidsalary-list.component';
import { EmpBankComponent } from './emp-bank/emp-bank.component';



const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'salaryes', component: SalaryListComponent},
  {path: 'combank/:accn/:carbal', component: CombankListComponent},
  {path: 'transfersal/:accn/:carbal', component: TransfersalListComponent},
  {path: 'grade', component: GradeListComponent},
  {path: 'salarysheet', component: SalarysheetListComponent},
  {path: 'balance', component: BalanceListComponent},
  {path: 'welcome', component: WelcomeListComponent},
  {path: 'paidsalary', component: PaidsalaryListComponent},
  {path: 'empbank', component: EmpBankComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
