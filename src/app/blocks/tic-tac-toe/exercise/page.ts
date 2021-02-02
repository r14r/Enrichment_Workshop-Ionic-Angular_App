import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tic-tac-toe',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class TicTacToePage implements OnInit {
	cells = ['', '', '', '', '', '', '', '', ''];
	player = 'x';
	winner = '';

	statusMessage() {
		if (this.winner != '') {
			return 'Der Gewinner ist ' + this.winner;
		} else {
			return 'Kein Gewinner';
		}
	}

	handleClick(cell) {
		console.log('Zelle ' + cell + '=' + this.cells[cell]);

		// 1. Ist es ein gültiger Zug, Nein ? ==> Abbrechen
		if (this.cells[cell] != '') {
			return;
		}

		// 2. Gültiger Zug! Stein setzen
		this.cells[cell] = this.player;

		// 3. Andere Spieler ist dran, X: this.player='O', O: this.player='X'
		if (this.player === 'x') {
			this.player = 'o';
		} else {
			this.player = 'x';
		}

		//  Check if Winner?
		const conditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[2, 4, 6],
			[0, 4, 8],
		];

		this.winner = '';

		for (const condition of conditions) {
			if (
				this.cells[condition[0]] != '' &&
				this.cells[condition[0]] == this.cells[condition[1]] &&
				this.cells[condition[1]] == this.cells[condition[2]]
			) {
				this.winner = this.cells[condition[0]];
			}
		}

		console.log('Yipee, gewonnen hat ' + this.winner);
	}

	constructor() {
		console.log(this.cells);

		// pos nacheinander 0, 1, 2,  ... 8 9
		for (
			let pos = 0; // Startwert
			pos < 9; // Wann Ende erreicht
			pos = pos + 1 // Index hoch zählen
		) {
			console.log(pos, this.cells[pos], pos * pos);
		}

		for (const cell in this.cells) {
			console.log('cell ' + cell + '=' + this.cells[cell]);
		}
	}

	ngOnInit() {}

	newGame() {
		this.winner = '';
		this.cells = ['', '', '', '', '', '', '', '', ''];
		this.player = 'x';
	}
}
