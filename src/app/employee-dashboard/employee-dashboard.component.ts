import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {



constructor(private router:Router){}

logout(): void{
  this.router.navigate(['login-page'])
}

}
