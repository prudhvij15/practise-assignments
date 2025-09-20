import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assignment',
  imports: [FormsModule],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
  visbility: boolean = true;
  showPassword: boolean = true;
  theme: boolean = true;
  textValue: string = '';
  maxLength: number = 100;
  selectedValue: string = '';
  operator: string = '';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  //Tas 6
  counter: number = 0;

  celsius: number = 0;

  toggleVisibility() {
    this.visbility = !this.visbility;
  }

  toggleTheme() {
    this.theme = !this.theme;
  }

  unitedStates: String[] = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];


  arithemeticOperations() {
    if (this.operator === '+') {
      this.result = this.num1 + this.num2;
    }
    if (this.operator === '-') {
      this.result = this.num1 - this.num2;
    }
    if (this.operator === '*') {
      this.result = this.num1 * this.num2;
    }
    if (this.operator === '/') {
      this.result = this.num1 / this.num2;
    }
    if (this.operator === '%') {
      this.result = this.num1 % this.num2;
    }
  }

  showPass() {
    this.showPassword = !this.showPassword;
  }
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  reset() {
    this.counter = 0;
  }
}
