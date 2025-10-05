import { CommonModule } from '@angular/common';
import { employees } from './../assignment2/user';
import { Component, EventEmitter, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees-service';


@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employee'],
  outputs:['viewEmployee','deleteEmployee']
})
export class EmployeeTable {
  employee :any[]=[];

  a = 10;
  viewEmployee = new EventEmitter();
  deleteEmployee = new EventEmitter();

 viewEmployeee(data:any){
  this.viewEmployee.emit(data)

 }
 deleteEmployeeById(empId:any){
  console.log("hiiiii",empId)
  this.deleteEmployee.emit(empId)
 }

}
