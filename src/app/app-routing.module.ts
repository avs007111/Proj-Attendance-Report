import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewempComponent } from './Employee/viewemp/viewemp.component';
import { AddempComponent } from './Employee/addemp/addemp.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FindempComponent } from './findemp/findemp.component';
import { EditEmpComponent } from './Employee/edit-emp/edit-emp.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  {path:'available-emp', component:ViewempComponent},
  {path: 'add-emp',component:AddempComponent},
  {path: 'login-page',component:LoginPageComponent},
  { path: 'employee/:id', component: FindempComponent },
  {path:'update-emp',component:EditEmpComponent},
  {path:'/dashboard',component:EmployeeDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
