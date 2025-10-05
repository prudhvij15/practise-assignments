import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-employee-add',
  imports: [CommonModule,FormsModule,Modal],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['addEmployee'],
  inputs:['newEmployee','isAdding','filteredEmployee']
})
export class EmployeeAdd {

newEmployee:any;
isAdding : any
filteredEmployee:any
  addEmployee = new EventEmitter();


  addEmp(){
    console.log("New emp",this.newEmployee)
    this.addEmployee.emit(this.newEmployee)
  }


}
