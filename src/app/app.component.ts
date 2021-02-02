import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public appPages = [
		{ title: 'Master/Details', url: 'blocks/master-details/master', icon: 'list' },
		{ title: 'Rechner', url: '/blocks/calculator', icon: 'calculator-outline' },
		{ title: 'TicTacToe', url: '/blocks/tictactoe/exercise', icon: 'apps-outline' },
		{ title: 'TicTacToe: Lösung', url: 'blocks/tictactoe/solution', icon: 'apps-outline' },
		{ title: 'Lesson: 2.3', url: '/lesson/23', icon: 'logo-javascript' },
		{ title: 'Lesson: 2.4', url: '/lesson/24', icon: 'logo-javascript' },
		{ title: 'Lesson: 2.5: Master/Details', url: '/lesson/25/master', icon: 'list' },
		{ title: 'Lesson: 2.5: List with Slider', url: '/lesson/25/master_with_slider', icon: 'list' },

		/* { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' }, { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' }, { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' }, { title: 'Archived', url: '/folder/Archived', icon: 'archive' }, { title: 'Trash', url: '/folder/Trash', icon: 'trash' }, { title: 'Spam', url: '/folder/Spam', icon: 'warning' }, */
	];
	public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
		this.initializeApp();
	}

	initializeApp() {
		/* this.platform.ready().then(() => { 	this.statusBar.styleDefault(); 	this.splashScreen.hide(); }); */
	}

	ngOnInit() {
		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
		}
	}
}
