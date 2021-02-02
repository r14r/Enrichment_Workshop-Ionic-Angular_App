import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicTacToePageRoutingModule } from './routing.module';

import { TicTacToePage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TicTacToePageRoutingModule,
	],
	declarations: [TicTacToePage],
})
export class TicTacToePageModule {}
