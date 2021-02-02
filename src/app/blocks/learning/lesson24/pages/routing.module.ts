import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson24Page } from './page';

const routes: Routes = [
	{
		path: '',
		component: Lesson24Page,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class Lesson24PageRoutingModule {}
