import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class CalculatorPage implements OnInit {
	// result ist vom Typ Zeichenfolge
	result = '';

	constructor() {}

	ngOnInit() {}

	btnClicked(btn) {
		let x;

		try {
			x = eval(this.result);
		} catch {
			//
		}

		// =
		x = 3;

		// if x == 3 {...}

		// x: 3

		// x: '3'
		// if x === 3 {...} ==> NICHT ZUTREFFEN
		// if '3' === 3 {...} ==> NICHT ZUTREFFEN

		if (btn === '=') {
			this.result = x;
		} else if (btn === 'C') {
			this.result = '';
		} else if (btn === '+/-') {
			this.result = -x + '';
		} else if (btn === '1/x') {
			this.result = (1 / x).toFixed(4) + '';
		} else if (btn == 'x^2') {
			this.result = x * x + '';
		} else if (btn == 'squareroot') {
			// Math.sqrt(x)
		} else if (btn === '%') {
			//
		} else {
			this.result = this.result + btn;
		}

		if (this.result === ' 123') {
			this.result = 'Bjarne';
		}
	}
}
