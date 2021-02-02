import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterWithSliderPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: MasterWithSliderPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MasterWithSliderPageRoutingModule {}
