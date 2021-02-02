import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson23-js',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Lesson23Page implements OnInit {
	wert = 1;
	schritt = 3;

	constructor() {}

	/*
	<ion-button (click)="hochzaehlen()"> Hochzaehlen </ion-button>
	<ion-button (click)="runterzaehlen()"> Runterzaehlen</ion-button>
	*/

	hochzaehlen() {
		this.wert = this.wert + this.schritt;

		console.log(this.wert, this.schritt);
	}

	runterzaehlen() {
		this.wert = this.wert - this.schritt;
	}

	ngOnInit() {}
}
