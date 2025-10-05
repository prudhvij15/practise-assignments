import { Component, inject } from '@angular/core';
import { employees } from './employeeDetails';
import { Modal } from '../modal/modal';
import Swal from 'sweetalert2';
// import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';
import { APP_MESSAGES } from './constants';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from "../employee-add/employee-add";
import { EmployeesService } from '../../services/employees-service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-crud',
  imports: [Modal, FormsModule, EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees :any[]=[]

  filteredEmployee: any = [{ id: '', firstName: '', lastName: '', position: '', department: '', salary: '' }];

  newEmployee: any = { id: '', firstName: '',lastName:'', position: '', department: '', salary: '' };

  isAdding: boolean = false;

   constructor(private httpClient: HttpClient) { }
  viewDetails(emp: any) {
    console.log(this.isAdding)
    this.isAdding =false
    this.filteredEmployee = this.employees.filter((e:any, i:any) => e.id == emp.id);
    console.log(this.filteredEmployee);
  }
  openAddModal() {
    console.log(this.isAdding)
    this.isAdding = true;
    console.log(this.isAdding,"after openmodal set to true")
    this.filteredEmployee = [];
    this.newEmployee = { id: '', name: '', email: '', role: '', department: '', salary: '' };
  }

  // saveEmployee(employeeData:any) {
  //   console.log(employeeData)
  //   const maxId = this.employees.length
  //     ? Math.max(...this.employees.map((e: any) => Number(e.id)))
  //     : 0;
  //   const newId = maxId + 1;
  //   this.employees.push({ ...this.newEmployee, id: newId });

  // }
  employeeService = inject(EmployeesService)
  filterByGender(value : Event){
    const target = value.target as HTMLSelectElement
    console.log(target.value)
    const selectedValue = target.value

   this.employees=this.employeeService.filterByGenderr(selectedValue.toLowerCase())

  }



  ngOnInit(){

    this.fetchEmployeesData();
  }


    fetchEmployeesData (){
      const data = this.httpClient.get('http://localhost:3000/employees').subscribe((data:any)=>{ this.employees=data})
      console.log("from crud " ,data)
    }

     saveEmployee(employeeData:any) {
    console.log(employeeData)
    const maxId = this.employees.length
      ? Math.max(...this.employees.map((e: any) => Number(e.id)))
      : 0;
    const newId = maxId + 1;

    const response = this.httpClient.post('http://localhost:3000/employees', {...this.newEmployee, id: String(newId)}).subscribe((data:any)=>{
      console.log("post response",data)
      this.employees.push(data)
    })
  }

  deleteEmployeeById(empId: any) {
    console.log("from delete" ,empId)
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
          text: 'Employee has been deleted',
          icon: 'success',
        });

        this.httpClient.delete(`http://localhost:3000/employees/${empId}`).subscribe((data:any)=>{
          this.employees = this.employees.filter((emp:any, i:any) => emp.id !== empId);
        })


      }
    });
  }





}
