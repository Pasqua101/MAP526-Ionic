import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Car } from '../models/Car';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  user: any;
  newName: string = "";
  newEmail: string = "";
  newPassword: string = "";

  carsList:Car[] = [
    {model:"Honda Civic", isElectric:false},
    {model:"Tesla Model X", isElectric:true},
    {model:"Toyota Prius", isElectric:true},     
  ]

  // items = [
  //   {name: "Apple", price: 2.00},
  //   {name: "Grapes", price: 4.983},
  //   {name: "Orange", price: 3.99}
  // ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // get users information on page initialization

    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params['user']);
      
      this.user = this.user[0];

      // set all the fields to hold the user's info
      this.newName = this.user.name;
      this.newEmail = this.user.email;
      this.newPassword = this.user.password;
      
    });
    
  }

  async saveUser(){
    let usersList: any = await Preferences.get({key: 'USERS'});

    if (usersList.value === null){
      console.log("Unable to find userslist");
      return;
    }

    // let foundUser = usersList.filter((users: any) => users === this.user);

    // overwrite the user's info
    // foundUser[0] = this.user;

    await Preferences.set({key: 'USERS', value: JSON.stringify(this.user)});
    console.log("Saved user's new info");
  }

  logout(){
    this.router.navigate(['/login-page']);
  }

  // selectedFruit: any;

  // formatFruit(item: any): string{
  //   return `${item.name} - $${item.price.toFixed(2)}`;
  // }

  // onFruitSelected(event: any){
  //   this.selectedFruit = event.detail.value;
  //   console.log('Selected Item:', this.selectedFruit);
  // }
 
  // holds a list of strings (fruits)
  fruitsList: string[] = [
    "Apple",
    "Orange",
    "Grapes",
    "Figs",
    "Watermelon",
    "Honeydew"
  ];

  filteredFruits: string[] = [...this.fruitsList]; // will hold a filtered list of fruits (strings) from the searchbar


  filterFruits(event: any){
    const searchTerm = event.target.value.toLowerCase(); // convert the entered search term into lower case
    
    // filter through the fruitsList with the entered searchTerm while also converting all items in the list to lower case
    this.filteredFruits = this.fruitsList.filter(item => item.toLowerCase().includes(searchTerm)); 
  }

}
