import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './routing.module';

import { CalculatorPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		CalculatorPageRoutingModule,
	],
	declarations: [CalculatorPage],
})
export class CalculatorPageModule {}
