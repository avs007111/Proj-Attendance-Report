import { Component } from '@angular/core';

import { emp } from '../Employee/employee.module';
import { EmpServiceService } from '../Services/emp.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
loginForm: any;
constructor(private router:Router){}
onSubmit(){}

signUp(){
  this.router.navigate(['add-emp'])
}
login(myform:any){

}

}
