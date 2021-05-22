import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import {SalaryListComponent} from './salary-list/salary-list.component';
import { TransfersalListComponent } from './transfersal-list/transfersal-list.component';
import { CombankListComponent } from './combank-list/cmobank-list.component';
import { SalarysheetListComponent } from './salarysheet-list/salarysheet-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { WelcomeListComponent } from './welcome/welcome-list.component';
import { PaidsalaryListComponent } from './paidsalary-list/paidsalary-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    SalaryListComponent,
    TransfersalListComponent,
    CombankListComponent,
    SalarysheetListComponent,
    GradeListComponent,
    BalanceListComponent,
    WelcomeListComponent,
    PaidsalaryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
