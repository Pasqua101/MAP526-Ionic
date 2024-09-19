import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToTeamPageRoutingModule } from './add-to-team-routing.module';

import { AddToTeamPage } from './add-to-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToTeamPageRoutingModule
  ],
  declarations: [AddToTeamPage]
})
export class AddToTeamPageModule {}
