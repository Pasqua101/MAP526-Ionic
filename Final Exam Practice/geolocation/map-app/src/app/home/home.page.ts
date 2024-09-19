import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: number = 0;
  long: number = 0;

  constructor() {}

  async getCurrentLocation(){
    console.log("Getting current location...");

    const {coords: coordinates} = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = coordinates;

    this.lat = latitude;
    this.long = longitude;

    console.log('Current position:', coordinates, latitude, longitude);
    
  }


}
