import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Quote from '../models/Quote';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-object-page',
  templateUrl: './object-page.page.html',
  styleUrls: ['./object-page.page.scss'],
})
export class ObjectPagePage implements OnInit {
  quote: Quote = {} as Quote;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.getQuote(); 
  }

  async getQuote(){
    try{
      const URL = 'https://dummyjson.com/quotes/1';

      this.quote = await lastValueFrom(this.http.get<Quote>(URL));

    } catch (e){
      console.error(e);
    }
  }

}
