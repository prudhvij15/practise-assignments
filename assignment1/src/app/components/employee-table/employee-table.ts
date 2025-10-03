import { CommonModule } from '@angular/common';
import { employees } from './../assignment2/user';
import { Component, EventEmitter } from '@angular/core';

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
 deleteEmployeeById(data:any){
  console.log(data)
  this.deleteEmployee.emit(data)
 }

  ngOnInit(): void {
    console.log(this.employee);
  }
}
