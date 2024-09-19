import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Quote from '../models/Quote';

@Component({
  selector: 'app-object-page',
  templateUrl: './object-page.page.html',
  styleUrls: ['./object-page.page.scss'],
})
export class ObjectPagePage implements OnInit {
  quote: Quote = {} as Quote;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // called after the constructor has been called
    // write the code to connect to the api
    this.getQuote();
  }

  // helper function
  async getQuote() {
    try {
      // define the endpoint
      const URL = 'https://dummyjson.com/quotes/1';

      // get the response
      // lastValueFrom is used to extract the last value from an Observable once it completes.
      // it allows you to convert an Observable to a Promise, which can then be used with async/await.
      this.quote = await lastValueFrom(this.http.get<Quote>(URL));
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}