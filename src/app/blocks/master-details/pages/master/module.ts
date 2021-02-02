import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterPageRoutingModule } from './routing.module';

import { MasterPage } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, MasterPageRoutingModule],
	declarations: [MasterPage],
})
export class MasterPageModule {}
