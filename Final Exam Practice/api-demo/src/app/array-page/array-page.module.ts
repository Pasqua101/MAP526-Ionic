import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrayPagePageRoutingModule } from './array-page-routing.module';

import { ArrayPagePage } from './array-page.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrayPagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ArrayPagePage]
})
export class ArrayPagePageModule {}
