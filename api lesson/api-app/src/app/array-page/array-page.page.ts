import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Digimon from '../models/Digimon';

@Component({
  selector: 'app-array-page',
  templateUrl: './array-page.page.html',
  styleUrls: ['./array-page.page.scss'],
})
export class ArrayPagePage implements OnInit {

  digimons: Digimon[] = {} as Digimon[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // called after the constructor has been called
    this.getDigimon();
  }

  // helper function
  async getDigimon(){
    try {
      const URL = "https://digimon-api.vercel.app/api/digimon";

      this.digimons = await lastValueFrom(this.http.get<Digimon[]>(URL));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

}
