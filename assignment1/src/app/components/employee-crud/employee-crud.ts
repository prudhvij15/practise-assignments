import { Component } from '@angular/core';
import { employees } from './employeeDetails';
import { Modal } from '../modal/modal';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-crud',
  imports: [Modal, FormsModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees = employees;
  filteredEmployee: any = []
  newEmployee: any = { id: '', name: '', email: '', role: '', department: '', salary: '' };

  isAdding: boolean = false;
  viewDetails(emp: any, index: any) {
    this.isAdding = false;
    this.filteredEmployee = this.employees.filter((e, i) => e.id == emp.id);
    console.log(this.filteredEmployee);
  }
  openAddModal() {
    this.isAdding = true;
    this.newEmployee = { id: '', name: '', email: '', role: '', department: '', salary: '' };
    this.newEmployee = { id: '', name: '', email: '', role: '', department: '', salary: '' };
  }

  saveEmployee() {
     const maxId = this.employees.length ? Math.max(...this.employees.map((e: any) => Number(e.id))) : 0;
      const newId = maxId + 1;

    this.employees.push({ ...this.newEmployee ,id: newId});
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
        console.log('delet', this.filteredEmployee);
      }
    });
  }
}
