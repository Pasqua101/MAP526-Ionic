import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})

  

export class LoginPagePage implements OnInit {    
  
  emailInput: string = "";
  passwordInput: string = "";
  usersList: any;


  constructor(private router: Router) { }

  ngOnInit() {

    this.createUser();
  }

  async createUser(){

    let userList: User[] = [
      {
        name: "Marco",
        email: "mpasqua@gmail.com",
        password: "password123"
      },
      {
        name: "Vlad",
        email: "vscraba@gmail.com",
        password: "login123"
      }
  ];

    await Preferences.set({key: 'USERS', value: JSON.stringify(userList)});
    console.log("Users created");
    
  }

  async login() {

    if (this.emailInput === "" || this.passwordInput === ""){
      console.log("Email and Password inputs cannot be empty");
      return;
    }

    // Get the users registered to the DB
    let grabbedUsers = await Preferences.get({key: 'USERS'});

    if (grabbedUsers.value === null){
      console.log("USERS were not found");
      return;
    }
    console.log("USERS were found");
    this.usersList = JSON.parse(grabbedUsers.value);
    let foundUser = this.usersList.filter((user: any) => user.email === this.emailInput); 

    if (foundUser === null){
      console.log("Unable to find the user");
      return;
    }
    console.log(foundUser);
    this.router.navigate(['profile-page'], {
      queryParams: {
        user: JSON.stringify(foundUser),
      }
    });
  }

}
