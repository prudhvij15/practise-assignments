import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assignment } from "./components/assignment/assignment";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Assignment2 } from "./components/assignment2/assignment2";
import { Assignment3 } from "./components/assignment3/assignment3";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Assignment, Assignment2, Assignment3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment1');
isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

}
