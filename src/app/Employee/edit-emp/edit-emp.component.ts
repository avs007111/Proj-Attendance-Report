import { Component,OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/Services/emp.service.service';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { emp } from '../employee.module';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit{
fetchedEmp:emp ={
  employeeID:0,
  employeeName:'',
  employeePhoneNumber:0,
  employeeEmail:'',
  password:'',
  role:''
};

myReactiveForm:FormGroup = new FormGroup({
  rsemployeeID: new FormControl(),
  rsemployeeName: new FormControl("",[Validators.required,Validators.maxLength(50)]),
  rsemployeePhoneNumber: new FormControl("",[Validators.required,Validators.maxLength(10)]),
  rsemployeeEmail:new FormControl("",[Validators.required,Validators.email]),
  rspassword: new FormControl("",Validators.required),
  rsrole: new FormControl("")
})

constructor(private empservice:EmpServiceService,
            private router:Router,
            private activatedRoute: ActivatedRoute){}

editemp(myReactiveForm:any){
  console.log("into edit");
  let updateEmp:emp={
    employeeID:myReactiveForm.value.rsemployeeID,
    employeeName:myReactiveForm.value.rsemployeeName,
    employeeEmail:myReactiveForm.value.rsemployeeEmail,
    employeePhoneNumber:myReactiveForm.value.rsemployeePhoneNumber,
    password:myReactiveForm.value.rspassword,
    role:myReactiveForm.value.rsrole
  }
  this.empservice.updateEmp(updateEmp).subscribe({
    next:(response)=>{
      console.log(response),
    this.router.navigate(['available-emp'])},
    error:(err)=>
      console.log(err)
  })
}
back(){
  this.router.navigate(['available-emp'])
}

ngOnInit(): void {
  let empID = this.activatedRoute.snapshot.paramMap.get('empID');
  if(empID!=null){
    this.empservice.getEmpById(+empID).subscribe({
      next:(response)=>{
        this.fetchedEmp = response;
        this.myReactiveForm.setValue({
          rsempID:this.fetchedEmp.employeeID,
          rsemployeeName:this.fetchedEmp.employeeName,
          rsemployeeEmail:this.fetchedEmp.employeeEmail,
          rsemployeePhoneNumber:this.fetchedEmp.employeePhoneNumber,
          rspassword:this.fetchedEmp.password,
          rsrole:this.fetchedEmp.role
        })
      },
      error:(err)=>
        console.log(err)
    })
  }
}

}
