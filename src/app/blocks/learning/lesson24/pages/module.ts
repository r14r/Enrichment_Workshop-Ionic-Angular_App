import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson24PageRoutingModule } from './routing.module';

import { Lesson24Page } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, Lesson24PageRoutingModule],
	declarations: [Lesson24Page],
})
export class Lesson24PageModule {}
