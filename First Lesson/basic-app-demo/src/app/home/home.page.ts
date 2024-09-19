import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  text = 'Welcome to my app';
  name: string = '';
  age: number = 0;

  buttonSubmit() {
    this.text = 'Data Submitted!';
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }

  buttonReset() {
    console.log('Data Reset!');
    this.text = 'Welcome to my app';
    this.name = '';
    this.age = 0;
  }
}