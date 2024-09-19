import { Component, OnInit } from '@angular/core';
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
    try {
      await Preferences.set({ key: 'STUDENT_NAME', value: this.nameFromUI});

      await Preferences.set({key: 'STUDENT_AGE', value: this.ageFromUI.toString()});

      // Saving an array
      const testScoresList = [50, 70, 80, 20];
      await Preferences.set({key: 'STUDENT_TEST_SCORES', value: JSON.stringify(testScoresList)});

      // saving and object
      const digimon: Digimon = {
        name: 'Pikachu',
        level: 'In training',
        img: 'blah.png'
      };

      await Preferences.set({key: 'STUDENT_DIGIMON', value: JSON.stringify(digimon)})
      console.log("SUCCESS: data saved");
      
    } catch (e){
      console.log(e);
    }
  }
  
  async retrievePressed() {
    console.log("Retrieve button pressed")

    try {
      let results = await Preferences.get({key: 'STUDENT_NAME'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }
      
      const nameFromKVS: string = results.value;
      console.log(`The value retrived is ${nameFromKVS}`);
      

      results = await Preferences.get({key: 'STUDENT_AGE'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }
      
      const ageFromKVS: number = Number(results.value);
      console.log(`Age is ${ageFromKVS}`);
      
      // list of test scores
      results = await Preferences.get({key: 'STUDENT_TEST_SCORES'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }

      const testScoresFromKVS: number[] = JSON.parse(results.value);
      console.log(testScoresFromKVS[0]);
      console.log(testScoresFromKVS[1]);
      console.log(testScoresFromKVS[2]);
      
      this.testScores = testScoresFromKVS;

      // Objects
      results = await Preferences.get({key: 'STUDENT_DIGIMON'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }

      const digimonFromKVS: Digimon = JSON.parse(results.value);
      console.log(digimonFromKVS);
      

    } catch (e){
      console.log(e);
      
    }
  }
}
