import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { Preferences } from '@capacitor/preferences';
import { DecimalPipe } from '@angular/common'; // importing decimal pipe to place commas as a thousand separator for a country's population

import CountryDetails from '../models/CountryDetails';



@Component({
  selector: 'app-country-detail-screen',
  templateUrl: './country-detail-screen.page.html',
  styleUrls: ['./country-detail-screen.page.scss'],
  providers: [DecimalPipe]
})
export class CountryDetailScreenPage implements OnInit {

  alpha3Code: string = "";
  country: CountryDetails = {} as CountryDetails;
  toastMessage: string = "";
  toastIsOpen: boolean = false; 

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private decimalPipe: DecimalPipe ) { 
    addIcons({star});
  }

  ngOnInit() {
    // see if the alpha3Code was passed to this screen
    this.route.queryParams.subscribe(params => {
      if ("alpha3Code" in params){
        this.alpha3Code = JSON.parse(params["alpha3Code"]);
        // Make sure that it isn't empty
        if (this.alpha3Code != ""){
          // get the required details about the country for this screen
          this.http.get<CountryDetails>(`https://restcountries.com/v2/alpha/${this.alpha3Code}`).subscribe(data => {
            this.country = {
                name: data.name,
                flag: data.flag,
                capital: data.capital ? data.capital : "N/A",
                population: data.population,
            };
          });
        }
      }
    })
  }

  // formats the population of a country to have commas as a separator
  formatPopulation(population: string){
    return this.decimalPipe.transform(population, '1.0-0');
  }

  async addToFavorites() {
    try {
      // Getting the current list of favorite countries
      const { value } = await Preferences.get({ key: 'favoriteCountries' });
      let favoriteCountries = value ? JSON.parse(value) : [];

      // Check if the country is already in the list
      if (!favoriteCountries.includes(this.alpha3Code)) {
        
        // Add the alpha3Code to the list
        favoriteCountries.push(this.alpha3Code);
        
        // Put it in the DB
        await Preferences.set({
          key: 'favoriteCountries',
          value: JSON.stringify(favoriteCountries),
        });
        
        this.toastMessage = "Added to favorites";
        
      } else {
        this.toastMessage = "This country is already in your favorites";
      }

      this.toastIsOpen = true;
      setTimeout(() => {
        this.toastIsOpen = false;
      }, 1500);

    } catch (err) {
      console.error('Failed to add to favorites', err);
    }
  }
}
