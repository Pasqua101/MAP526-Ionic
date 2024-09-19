import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectPagePageRoutingModule } from './object-page-routing.module';

import { ObjectPagePage } from './object-page.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectPagePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ObjectPagePage]
})
export class ObjectPagePageModule {}
