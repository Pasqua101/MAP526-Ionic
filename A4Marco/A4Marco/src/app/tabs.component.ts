import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { home, heart } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'tabs.component.html',
})
export class TabsComponent {
  constructor() {
    addIcons({ home, heart });
  }
}