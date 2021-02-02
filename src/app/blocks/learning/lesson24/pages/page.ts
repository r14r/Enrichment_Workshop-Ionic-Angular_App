import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson24',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Lesson24Page implements OnInit {
	val1 = 1;
	val2 = 2;
	summe = 5;

	berechnete_summe = 0;

	ergebnis = '';

	constructor() {}

	ngOnInit() {}

	check() {
		this.berechnete_summe = this.val1 + this.val2;

		console.log(this.berechnete_summe == this.summe);

		// wenn die beiden werte gleich sind
		if (this.berechnete_summe == this.summe) {
			// dann
			this.ergebnis = 'richtig';
		} else {
			// ansonsten
			this.ergebnis = 'falsch';
		}
	}
}
