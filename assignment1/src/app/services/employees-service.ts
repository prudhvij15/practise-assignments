import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 employees = [
  { id: 1, name: 'John Smith', email: 'john.smith@example.com', role: 'Software Engineer', department: 'IT', salary: 75000, gender: 'Male' },
  { id: 2, name: 'Emily Johnson', email: 'emily.johnson@example.com', role: 'HR Manager', department: 'Human Resources', salary: 68000, gender: 'Female' },
  { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'DevOps Engineer', department: 'IT', salary: 82000, gender: 'Male' },
  { id: 4, name: 'Sophia Davis', email: 'sophia.davis@example.com', role: 'Business Analyst', department: 'Finance', salary: 70000, gender: 'Female' },
  { id: 5, name: 'Liam Wilson', email: 'liam.wilson@example.com', role: 'Team Lead', department: 'Engineering', salary: 95000, gender: 'Male' },
  { id: 6, name: 'Olivia Martinez', email: 'olivia.martinez@example.com', role: 'QA Engineer', department: 'Quality Assurance', salary: 66000, gender: 'Female' },
  { id: 7, name: 'Ethan Anderson', email: 'ethan.anderson@example.com', role: 'Intern', department: 'IT', salary: 40000, gender: 'Male' },
  { id: 8, name: 'Ava Thomas', email: 'ava.thomas@example.com', role: 'UI/UX Designer', department: 'Design', salary: 72000, gender: 'Female' },
  { id: 9, name: 'Noah Taylor', email: 'noah.taylor@example.com', role: 'Product Manager', department: 'Product', salary: 88000, gender: 'Male' },
  { id: 10, name: 'Isabella Moore', email: 'isabella.moore@example.com', role: 'Marketing Specialist', department: 'Marketing', salary: 65000, gender: 'Female' }
];


getAllEMployees(){
  return [...this.employees]
}

  filterByGenderr(value:string){
    console.log(value)
    if(value ==="male"){
        return this.employees.filter(emp=>emp.gender.toLowerCase() === 'male')
    }else if(value==='female'){
      return this.employees.filter(emp=>emp.gender.toLowerCase() ==='female')
    }else{
      return this.employees
    }
  }

}
