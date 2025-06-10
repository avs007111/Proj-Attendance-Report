import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/Services/emp.service.service';
import { emp } from '../employee.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit{


  employeeForm: FormGroup;
  constructor(private router:Router,
              private empService:EmpServiceService,
              private form: FormBuilder
  ){
    this.employeeForm = this.form.group({
    employeeID: ['', Validators.required],
    employeeName: ['', Validators.required],
    employeePhoneNumber: ['', Validators.required],
    employeeEmail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['', Validators.required]
});
}

  ngOnInit(): void {}

  addemp(){ 
if (this.employeeForm.valid) {
    const employeeData: emp = this.employeeForm.value;
      this.empService.addEmp(employeeData).subscribe(response => {
      console.log('Employee posted successfully:', response);
      console.error('Error posting employee:', Error);
  });
  }
  }
  back(){
    this.router.navigate(['login-page']);
  }
}
