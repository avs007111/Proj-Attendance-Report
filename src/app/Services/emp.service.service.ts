import { Injectable } from '@angular/core';
import { emp } from '../Employee/employee.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http:HttpClient) {}

  private url : string = 'https://localhost:7272/api/Employee';


getAllEmps() : Observable<emp[]> {
 return this.http.get<emp[]>(this.url);
}

getEmpById(id:number):Observable<emp>{
  return this.http.get<emp>(`${this.url}/id?id=${id}`);
}

deleteEmp(empid:number):Observable<void>{
  return this.http.delete<void>(`${this.url}/${empid}`);
}

updateEmp(empdata:emp):Observable<void>{
  return this.http.put<void>(this.url+'/'+empdata.employeeID,empdata);
}

addEmp(empinfo:emp):Observable<emp>{
  return this.http.post<emp>(this.url+'/emps',empinfo);
}



}
