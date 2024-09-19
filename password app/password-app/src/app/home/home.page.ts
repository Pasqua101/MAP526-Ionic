import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import User from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {
    this.createUser();
  }

  async createUser(){
    try{ 
      // allows for multiple users to be stored on DB
      const users: User[] = [
        {username: 'mpasqua', password: 'Gotham2003'},
      ];
      await Preferences.set({key: "users", value: JSON.stringify(users)});
    } catch (err){
      console.error("Unable to create user: ", err);
    }
  }

  async login(){
    try{
      const {value} = await Preferences.get({key: "users"});
      const users: User[] = value ? JSON.parse(value) : [];

      const user: User | undefined = users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        console.log("user found")
        this.router.navigate(['/password-change'], {
          queryParams: {
            username: JSON.stringify(this.username),
          }
        });
      } else {
        console.log('Invalid username or password');
      }

    } catch (err){
      console.error("Unable to login: ", err);
    }
  }
}
