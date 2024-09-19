import { Component, OnInit } from '@angular/core';

// import the persistence library
import { Preferences } from '@capacitor/preferences';
import Digimon from '../models/Digimon';

@Component({
  selector: 'app-persistence-demo',
  templateUrl: './persistence-demo.page.html',
  styleUrls: ['./persistence-demo.page.scss'],
})
export class PersistenceDemoPage implements OnInit {

  nameFromUI:string="Peter"
  ageFromUI:number=55

  testScores: number[] = [];

  constructor() { }

  ngOnInit() {
  }
  
  async savePressed() {
    console.log("Save button pressed");

    // get the values entered in the text boxes

    // using the persistence apis library function, save it
    try {
      await Preferences.set({key: 'STUDENT_NAME', value: this.nameFromUI});
      
      // key-value storage can only represent saved data as strings
      // so you have to convert any of your data to a string prior to inserting into key-value storage
      await Preferences.set({
        key: 'STUDENT_AGE',
        value: this.ageFromUI.toString(),
      });

      // array of primitives (array of integers)
      // JSON.stringify - converts arrays and objects to their string representations
      const testScoresList = [50, 70, 80, 20];
      await Preferences.set({
        key: 'STUDENT_TEST_SCORES',
        value: JSON.stringify(testScoresList),
      });

      // save an object
      const digimon: Digimon = {
        name: 'Pikachu',
        level: 'In Training',
        img: 'blah.png',
      };
      
      await Preferences.set({
        key: 'STUDENT_DIGIMON',
        value: JSON.stringify(digimon),
      });


    } catch (err) {
      console.log(err);
    }
  }
  
  async retrievePressed() {
    console.log('Retrieve button pressed');

    try {
      // { value: null }
      // { value: "Peter" }
      let results = await Preferences.get({ key: 'STUDENT_NAME' });
      if (results.value === null) {
        console.log('This key does not exist');
        // throw("The key does not exist")
        return;
      }

      const nameFromKVS: string = results.value;
      console.log(`The value retrieved is ${nameFromKVS}`);

      // age
      results = await Preferences.get({ key: 'STUDENT_AGE' });
      if (results.value === null) {
        console.log('This key does not exist');
        // throw("The key does not exist")
        return;
      }
      const ageFromKVS: number = Number(results.value);
      console.log(`The age in 5 years  ${ageFromKVS + 5}`);

      // list of test scores
      results = await Preferences.get({ key: 'STUDENT_TEST_SCORES' });
      if (results.value === null) {
        console.log('This key does not exist');
        // throw("The key does not exist")
        return;
      }
      // convert it back to its original data type (list of numbers)
      const testScoresFromKVS: number[] = JSON.parse(results.value);
      console.log(testScoresFromKVS[0]);
      console.log(testScoresFromKVS[1]);
      console.log(testScoresFromKVS[2]);

      // update the template
      this.testScores = testScoresFromKVS;

      // Digimon object
      results = await Preferences.get({ key: 'STUDENT_DIGIMON' });
      if (results.value === null) {
        console.log('This key does not exist');
        // throw("The key does not exist")
        return;
      }
      // convert it back to its original data type (Digimon)
      const digimonFromKVS: Digimon = JSON.parse(results.value);
      console.log(digimonFromKVS);
    } catch (e) {
      console.log(e);
    }
  }
}
