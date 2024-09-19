import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import User from '../models/User';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

  oldPassword: string = "";
  newPassword: string = "";
  confirmPassword: string = "";
  currentUser: User | undefined;
  userLocationInList: any;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      let username: string = JSON.parse(params["username"]);

       this.findUserByUsername(username);
      console.log("Found user from username: ", this.userLocationInList);
    })
  }

  ngOnInit() {
  }

  async findUserByUsername(username: string){
    const {value} = await Preferences.get({key: "users"});

    const users: User[] = value ? JSON.parse(value) : [];

    // finding the user by username
    this.currentUser = users.find((u: User) => u.username === username);
    if (!this.currentUser){
      console.error("user not found");
      
    } else{
      console.log("User found: ", this.currentUser);
      
    }
  }

  async updatePassword() {
    if (!this.currentUser) {
      alert('User not found!');
      return;
    }

    // Check if old password matches the current one
    if (this.oldPassword !== this.currentUser.password) {
      alert('Old password is incorrect');
      return;
    }

    // Validate new password
    if (this.newPassword.length < 8) {
      alert('New password must be at least 8 characters long');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('New password and confirmation do not match');
      return;
    }

    // Update the user's password
    this.currentUser.password = this.newPassword;

    // Update the user list in storage
    const { value } = await Preferences.get({ key: 'users' });
    const users: User[] = value ? JSON.parse(value) : [];
    const userIndex = users.findIndex((u: User) => u.username === this.currentUser!.username);

    if (userIndex !== -1) {
      users[userIndex] = this.currentUser;
      await Preferences.set({ key: 'users', value: JSON.stringify(users) });

      alert('Password successfully changed');
      
    } else {
      console.error('Error updating user in storage');
    }
  }

}
