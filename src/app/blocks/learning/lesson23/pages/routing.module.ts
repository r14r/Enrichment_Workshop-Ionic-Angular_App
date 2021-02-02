import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson23Page } from './page';

const routes: Routes = [
	{
		path: '',
		component: Lesson23Page,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Lesson23PageRoutingModule {}
