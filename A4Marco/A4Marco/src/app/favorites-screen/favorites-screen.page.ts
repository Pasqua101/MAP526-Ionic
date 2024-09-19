import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-favorites-screen',
  templateUrl: './favorites-screen.page.html',
  styleUrls: ['./favorites-screen.page.scss'],
})
export class FavoritesScreenPage implements OnInit {
  favoriteCountries: string[] = [];
  constructor() { 
    addIcons({trash});
  }

  // NOTE: ngOnInit will load only the first time this page is selected in the tabBar. SInce the page runs in the backround
  ngOnInit() {}

  // NOTE: ionViewWillEnter will be called no matter how many times this sceen is selected in the tabBar
  ionViewWillEnter(){
    this.getFavorites();  
  }

  async getFavorites(){
    try{
      const {value} = await Preferences.get({key: 'favoriteCountries'});
      
      if (value){
        this.favoriteCountries = JSON.parse(value);
      }
    } catch (err){
      console.error("Unable to get list of favorite countries: ", err)
    }
  }

  async deleteFavouriteCountry(alpha3Code: string){
    try{
      
      // get favorite countries
      const {value} = await Preferences.get({key: 'favoriteCountries'});
      let favoriteCountries = value ? JSON.parse(value) : [];

      // remove the country from the list
      favoriteCountries = favoriteCountries.filter((code: string) => code !== alpha3Code);

      // update the DB (preferences)
      await Preferences.set({
        key: 'favoriteCountries',
        value: JSON.stringify(favoriteCountries)
      });

      // refreshing the list
      this.favoriteCountries = favoriteCountries;
      
    } catch (err){
      console.error("Unable to remove favorite country: ", err);
      
    }
  }

  async deleteFavorites(){
    try{
      
      // delete all saved countries from DB (preferences)
      await Preferences.remove({ key: 'favoriteCountries' });

      // Refreshing the list
      this.favoriteCountries = [];

    } catch (err){
      console.error("unable to delete countries: ", err);
    }
  }
}
