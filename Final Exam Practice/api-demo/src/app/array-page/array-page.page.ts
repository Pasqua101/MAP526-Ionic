import { Component, OnInit } from '@angular/core';
import Digimon from '../models/Digimon';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-array-page',
  templateUrl: './array-page.page.html',
  styleUrls: ['./array-page.page.scss'],
})
export class ArrayPagePage implements OnInit {

  digimons: Digimon[] = [] as Digimon[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDigimons();
  }

  async getDigimons(){
    try{
      const URL = 'https://digimon-api.vercel.app/api/digimon';
      this.digimons = await lastValueFrom(this.http.get<Digimon[]>(URL));
    } catch (e){
      console.error(e);
      
    }
  }

}
