import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Student from '../models/Student';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  text = 'Welcome to my app';
  name: string = '';
  age: number = 0;

  buttonSubmit() {
    this.text = 'Data Submitted!';
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);

    let student: Student = {
      name: this.name,
      age: this.age,
    };

    this.router.navigate(['/second-page'], {
      queryParams: {
        student: JSON.stringify(student),
      },
    });
    // ^ This is dynamic routing
  }

  buttonReset() {
    console.log('Data Reset!');
    this.text = 'Welcome to my app';
    this.name = '';
    this.age = 0;
  }
}