import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'folder/Inbox', pathMatch: 'full' },
	{ path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then((m) => m.FolderPageModule) },
	{ path: 'lesson/23', loadChildren: () => import('./blocks/learning/lesson23/pages/module').then((m) => m.Lesson23JsPageModule) },
	{ path: 'lesson/24', loadChildren: () => import('./blocks/learning/lesson24/pages/module').then((m) => m.Lesson24PageModule) },
	{
		path: 'lesson/25/master',
		loadChildren: () => import('./blocks/learning/lesson25/pages/master/module').then((m) => m.MasterPageModule),
	},
	{
		path: 'lesson/25/master_with_slider',
		loadChildren: () => import('./blocks/learning/lesson25/pages/master_with_slider/module').then((m) => m.MasterWithSliderPageModule),
	},
	{
		path: 'lesson/25/details',
		loadChildren: () => import('./blocks/learning/lesson25/pages/details/details.module').then((m) => m.DetailsPageModule),
	},
	{ path: 'blocks/calculator', loadChildren: () => import('./blocks/calculator/pages/home/module').then((m) => m.CalculatorPageModule) },
	{
		path: 'blocks/tictactoe/solution',
		loadChildren: () => import('./blocks/tic-tac-toe/solution/module').then((m) => m.TicTacToePageModule),
	},
	{
		path: 'blocks/tictactoe/exercise',
		loadChildren: () => import('./blocks/tic-tac-toe/exercise/module').then((m) => m.TicTacToePageModule),
	},
	{
		path: 'blocks/master-details/master',
		loadChildren: () => import('./blocks/master-details/pages/master/module').then((m) => m.MasterPageModule),
	},
	{
		path: 'blocks/master-details/details/:ID',
		loadChildren: () => import('./blocks/master-details/pages/details/module').then((m) => m.DetailsPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
