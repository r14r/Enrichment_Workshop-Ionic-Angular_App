import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson23PageRoutingModule } from './routing.module';

import { Lesson23Page } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		Lesson23PageRoutingModule,
	],
	declarations: [Lesson23Page],
})
export class Lesson23JsPageModule {}
