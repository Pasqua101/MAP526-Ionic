import { Component, OnInit } from '@angular/core';

import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-add-to-team',
  templateUrl: './add-to-team.page.html',
  styleUrls: ['./add-to-team.page.scss'],
})
export class AddToTeamPage implements OnInit {
  teamMember: string = '';

  constructor() {}

  async ngOnInit() {
    // get the team member from the preferences
    try {
      let results = await Preferences.get({ key: 'DIGIMON_TEAM' });
      if (results.value === null) {
        console.log('This key does not exist');
        // throw("The key does not exist")
        return;
      }

      this.teamMember = results.value;
    } catch (e) {
      console.log(e);
    }
  }
}