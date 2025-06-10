import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewempComponent } from './Employee/viewemp/viewemp.component';
import { AddempComponent } from './Employee/addemp/addemp.component';
import { EmpServiceService } from './Services/emp.service.service';
import { HeaderComponent } from './header/header.component';
import { FindempComponent } from './findemp/findemp.component';
import { EditEmpComponent } from './Employee/edit-emp/edit-emp.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewempComponent,
    AddempComponent,
    HeaderComponent,
    FindempComponent,
    EditEmpComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
