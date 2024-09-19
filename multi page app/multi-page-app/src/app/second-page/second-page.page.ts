import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Student from '../models/Student';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

  name:string = '';
  age:number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(params){ // check to see if anything was passed
        console.log(params);

        if("student" in params){
          let student: Student = JSON.parse(params["student"]);
          console.log("student:", student);
          
          this.name = student.name;
          this.age = student.age;
        }
        
      }
    })
   }

  ngOnInit() {
  }

}
