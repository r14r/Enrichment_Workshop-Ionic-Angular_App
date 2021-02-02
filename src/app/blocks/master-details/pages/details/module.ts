import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './page';
import { DetailsPageRoutingModule } from './routing.module';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, DetailsPageRoutingModule, ComponentsModule],
	declarations: [DetailsPage],
})
export class DetailsPageModule {}
