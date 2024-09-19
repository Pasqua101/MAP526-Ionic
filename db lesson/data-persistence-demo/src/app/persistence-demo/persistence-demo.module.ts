import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersistenceDemoPageRoutingModule } from './persistence-demo-routing.module';

import { PersistenceDemoPage } from './persistence-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersistenceDemoPageRoutingModule
  ],
  declarations: [PersistenceDemoPage]
})
export class PersistenceDemoPageModule {}
