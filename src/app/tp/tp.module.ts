import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpPageRoutingModule } from './tp-routing.module';

import { TpPage } from './tp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpPageRoutingModule
  ],
  declarations: [TpPage]
})
export class TpPageModule {}
