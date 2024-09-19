import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import Digimon from '../models/Digimon';


@Component({
  selector: 'app-persistence-demo',
  templateUrl: './persistence-demo.page.html',
  styleUrls: ['./persistence-demo.page.scss'],
})
export class PersistenceDemoPage implements OnInit {

  nameFromUI: string = 'Peter';
  ageFromUI: number = 55;
  testScores: number[] = [];
  digimon: Digimon = {} as Digimon;


  constructor() { }

  ngOnInit() {
  }
  
  async savePressed() {
    console.log("Save button pressed");

    try {
      await Preferences.set({ key: 'STUDENT_NAME', value: this.nameFromUI});

      await Preferences.set({key: 'STDUENT_AGE', value: this.ageFromUI.toString()});

      const testScoresList = [50, 70, 80, 20];
      await Preferences.set({
        key: 'STUDENT_TEST_SCORES',
        value: JSON.stringify(testScoresList)
      });

      const digimon: Digimon = {
        name: 'STUDENT_DIGIMON',
        level: 'In Training',
        img: 'blah.png',
      };

      await Preferences.set({
        key: 'STUDENT_DIGIMON',
        value: JSON.stringify(digimon)
      });

      console.log("SUCCESS: data saved");
      
    } catch (e){
      console.log(e);
    }
  }
  
  async retrievePressed() {
    console.log('Retrieve button pressed');

    try {
      let results = await Preferences.get({key: 'STUDENT_NAME'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }

      const nameFromKVS: string = results.value;
      console.log(`The value retrieved is ${nameFromKVS}`);
      
      results = await Preferences.get({key: 'STUDENT_AGE'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }

      const ageFromKVS: string = results.value;
      console.log(`The value retrieved for age is ${ageFromKVS}`);

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

      results = await Preferences.get({ key: 'STUDENT_DIGIMON'});
      if (results.value === null){
        console.log("This key does not exist");
        return;
      }

      const digimonFromKVS: Digimon = JSON.parse(results.value);
      console.log(`Digimon from db ${digimonFromKVS}`);

    } catch (e){
      console.log(e);
      
    }
    
  }

  async removeStudent(){
    await Preferences.remove({key: "STUDENT_NAME"});
    await Preferences.remove({key: "STUDENT_AGE"});
  }
}
