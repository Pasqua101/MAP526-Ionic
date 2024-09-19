import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptScreenPageRoutingModule } from './receipt-screen-routing.module';

import { ReceiptScreenPage } from './receipt-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiptScreenPageRoutingModule
  ],
  declarations: [ReceiptScreenPage]
})
export class ReceiptScreenPageModule {}
