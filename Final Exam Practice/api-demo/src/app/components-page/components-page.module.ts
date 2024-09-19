import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPagePageRoutingModule } from './components-page-routing.module';

import { ComponentsPagePage } from './components-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPagePageRoutingModule
  ],
  declarations: [ComponentsPagePage]
})
export class ComponentsPagePageModule {}
