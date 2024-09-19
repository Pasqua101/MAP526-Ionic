import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesScreenPageRoutingModule } from './favorites-screen-routing.module';

import { FavoritesScreenPage } from './favorites-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesScreenPageRoutingModule
  ],
  declarations: [FavoritesScreenPage]
})
export class FavoritesScreenPageModule {}
