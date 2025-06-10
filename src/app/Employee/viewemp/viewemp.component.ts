import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmpServiceService } from 'src/app/Services/emp.service.service';
import { emp } from '../employee.module';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

employee:emp[] = [];
constructor( private router:Router,
            private empservice:EmpServiceService
){}

ngOnInit(): void {
  this.empservice.getAllEmps().subscribe({
    next:(data)=>{
      this.employee = data;
    },
    error:(err) =>{
    console.log(err);
    }
  })
  }


loadData(){
  this.empservice.getAllEmps().subscribe({
    next:(data) => {
      this.employee = data;
      console.log(this.employee);
    },
    error:(err) =>{
    console.log(err);
    }
  })
}


  deleteemp(empId:number){
    this.empservice.deleteEmp(empId).subscribe({
      next:(response)=>{
      this.loadData();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  back(){
    this.router.navigate(['login-page']);
  }

}
