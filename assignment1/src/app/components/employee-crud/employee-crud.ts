import { Component } from '@angular/core';
import { employees } from './employeeDetails';
import { Modal } from '../modal/modal';
import Swal from 'sweetalert2';
// import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';
import { APP_MESSAGES } from './constants';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from "../employee-add/employee-add";
@Component({
  selector: 'app-employee-crud',
  imports: [Modal, FormsModule, EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees = employees;

  filteredEmployee: any = [{ id: '', name: '', email: '', role: '', department: '', salary: '' }];

  newEmployee: any = { id: '', name: '', email: '', role: '', department: '', salary: '' };

  isAdding: boolean = false;
  viewDetails(emp: any) {
    console.log(this.isAdding)
    this.isAdding =false
    this.filteredEmployee = this.employees.filter((e, i) => e.id == emp.id);
    console.log(this.filteredEmployee);
  }
  openAddModal() {
    console.log(this.isAdding)
    this.isAdding = true;
    console.log(this.isAdding,"after openmodal set to true")
    this.filteredEmployee = [];
    this.newEmployee = { id: '', name: '', email: '', role: '', department: '', salary: '' };
  }

  saveEmployee() {
    console.log()
    const maxId = this.employees.length
      ? Math.max(...this.employees.map((e: any) => Number(e.id)))
      : 0;
    const newId = maxId + 1;
    this.employees.push({ ...this.newEmployee, id: newId });
    // new Snackbar(APP_MESSAGES.EMPLOYEE_ADDED, {
    //   position: 'top-center',
    //   theme: 'light',
    //   timeout: 5000,
    //   actionText: 'X',
    // });
  }

  deleteEmployeeById(index: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        this.employees = this.employees.filter((emp, i) => i !== index);
        this.filteredEmployee = [...this.employees];
        // new Snackbar(APP_MESSAGES.EMPLOYEE_ADDED, {
        //   position: 'top-center',
        //   theme: 'light',
        //   timeout: 5000,
        //   actionText: 'X',
        // });
        // console.log('delet', this.filteredEmployee);
      }
    });
  }
}
