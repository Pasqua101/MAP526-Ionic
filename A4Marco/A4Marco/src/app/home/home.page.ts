import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

import Country from '../models/Country';


@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  countries: Country[] = [];

  constructor(private http: HttpClient, private router: Router) {
    addIcons({chevronForwardOutline});
  }

  ngOnInit(){
    this.http.get<Country[]>("https://restcountries.com/v2/all").subscribe(data => {
      this.countries = data.map(country => ({
        name: country.name,
        flag: country.flag,
        alpha3Code: country.alpha3Code,
      }));
    });
  }

  openDetail(alpha3Code: string){
    this.router.navigate(['/country-detail-screen'], {
      queryParams: {
        // Pass the selected country's code to the next screen to then query the api for a country's details with the alpha3Code
        alpha3Code: JSON.stringify(alpha3Code),
      }
    });
  }
}
