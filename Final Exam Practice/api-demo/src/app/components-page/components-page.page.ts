import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.page.html',
  styleUrls: ['./components-page.page.scss'],
})
export class ComponentsPagePage implements OnInit {

  name: string = "";
  age: number = 0;
  playGames: boolean = false;

  fruitsList: string[] = ["apple", "orange", "banana"];

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(`Hi ${this.name}, you are ${this.age} years old. Plays games ${this.playGames}`);
  }

}
