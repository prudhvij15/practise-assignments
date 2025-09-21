import { Component } from '@angular/core';
import { employees, users } from './user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-assignment2',
  imports: [CommonModule],
  templateUrl: './assignment2.html',
  styleUrl: './assignment2.css',
})
export class Assignment2 {
  showCardView: boolean = false;
  usersList = users;
  employees = employees;
  showCards() {
    this.showCardView = !this.showCardView;
  }


  getSalaryClass(salary: number) {
    if (salary > 70000) {
      return 'badge bg-success';
    } else if (salary >= 40000 && salary <= 70000) {
      return 'badge bg-warning text-dark';
    } else {
      return 'badge bg-danger';
    }
  }
}
