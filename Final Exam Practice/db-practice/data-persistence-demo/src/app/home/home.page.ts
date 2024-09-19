import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Digimon from '../models/Digimon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // class property 
  digimonList:Digimon[] = []

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // api requests
    this.getDigimon()
  }

  // helper functions
  async getDigimon() {
    try {
      // 1. define the api endpoint
      const URL = "https://digimon-api.vercel.app/api/digimon" 
      // 2. connect to it and get response
      const response:Digimon[] = await lastValueFrom(this.http.get<Digimon[]>(URL))       
      // 3. set the digimon class property to the list retrieved from the URL
      this.digimonList = response

    } catch(e) {
      // 4. handle error
      console.log("Error when executing getDigimon()")
      console.log(e)
    }
  }

  // TODO: Adding a Digimon to a team
  // - When a row is clicked, add the digimon to the Team (this team should be persisted)
  // - After adding it to the team, display a Toast or Alert Box
}
