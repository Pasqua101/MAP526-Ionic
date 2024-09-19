import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Digimon from '../models/Digimon';
import { Preferences } from '@capacitor/preferences';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // class property
  digimonList: Digimon[] = [];

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // api requests
    this.getDigimon();
  }

  // helper functions
  async getDigimon() {
    try {
      // 1. define the api endpoint
      const URL = 'https://digimon-api.vercel.app/api/digimon';
      // 2. connect to it and get response
      const response: Digimon[] = await lastValueFrom(
        this.http.get<Digimon[]>(URL)
      );
      // 3. set the digimon class property to the list retrieved from the URL
      this.digimonList = response;
    } catch (e) {
      // 4. handle error
      console.log('Error when executing getDigimon()');
      console.log(e);
    }
  }

  // TODO: Adding a Digimon to a team
  // - When a row is clicked, add the digimon to the Team (this team should be persisted)
  // - After adding it to the team, display a Toast or Alert Box
  async rowPressed(selectedDigimon: string) {
    console.log(`The row was clicked: ${selectedDigimon}`);
    // 1. get the clicked digimon
    // 2. add it to the key-value storage
    try {
      await Preferences.set({ key: 'DIGIMON_TEAM', value: selectedDigimon });
      console.log('SUCCESS: Date saved!');

      // display a toast
      const toast = await this.toastController.create({
        message: `Saved: ${selectedDigimon}`,
        duration: 1500,
        position: 'bottom',
      });

      await toast.present();
    } catch (e) {
      console.log(e);
    }
  }
}