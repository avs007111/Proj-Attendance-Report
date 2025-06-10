import { Component, OnInit } from '@angular/core';
import { emp } from '../Employee/employee.module';
import { EmpServiceService } from '../Services/emp.service.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-findemp',
  templateUrl: './findemp.component.html',
  styleUrls: ['./findemp.component.css']
})
export class FindempComponent implements OnInit{


  constructor(private router : Router,
              private activatedRoute: ActivatedRoute,
              private empservice: EmpServiceService
  ){}

fetchedEmp:emp={
  employeeID:0,
  employeeName:'',
  employeeEmail:'',
  employeePhoneNumber:0,
  password:'',
  role:''
}

back(){
  this.router.navigate(['login-page'])
}

ngOnInit():void {
  let empId = this.activatedRoute.snapshot.paramMap.get('EmployeeID');


  if(empId!=null)
    {
      this.empservice.getEmpById(+empId).subscribe({
        next:(response)=>{
          this.fetchedEmp=response;
        },
        error:(err)=>console.log(err)
      })
    } 
}


searchEmp(){
  let empId = this.activatedRoute.snapshot.paramMap.get('EmployeeID');


  if(empId!=null)
    {
      this.empservice.getEmpById(+empId).subscribe({
        next:(response)=>{
          this.fetchedEmp=response;
        },
        error:(err)=>console.log(err)
      })
}
}

}
