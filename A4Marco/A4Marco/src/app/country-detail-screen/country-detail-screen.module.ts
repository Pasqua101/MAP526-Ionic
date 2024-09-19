import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryDetailScreenPageRoutingModule } from './country-detail-screen-routing.module';

import { CountryDetailScreenPage } from './country-detail-screen.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryDetailScreenPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [CountryDetailScreenPage]
})
export class CountryDetailScreenPageModule {}
