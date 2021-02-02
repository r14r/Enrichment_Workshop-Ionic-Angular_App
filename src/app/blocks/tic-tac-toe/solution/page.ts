import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-game',
	templateUrl: 'page.html',
	styleUrls: ['./page.scss']
})
export class TicTacToePage {

	cellPlayer = 'x';
	cellOponent = 'o';
	cellEmpty = 'empty';

	squares = Array(9).fill(this.cellEmpty);
	player = 'x';

	winner = null;


	constructor(public router: Router) {
		console.log('constructor');
	}

	get gameStatusMessage() {
		const message = this.winner
			? `${this.winner} has won!`
			: `${this.player}'s turn`;

		return message;
	}

	handleMove(position) {
		console.log('handleMove', 'position=' + position);

		if (this.winner) {
			console.log('handleMove', ' has winner ' + this.winner);
			return;
		}

		if (this.squares[position] !== this.cellEmpty) {
			console.log('handleMove', 'cell not empty' + this.squares[position]);
			return;
		}

		console.log('handleMove', 'move=' + this.player);

		this.squares[position] = this.player;

		if (this.winnigMove()) {
			this.winner = this.player;
			console.log('handleMove', 'found winner ' + this.winner);
		}

		this.player =
			this.player === this.cellPlayer
				? this.cellOponent
				: this.cellPlayer;
	}

	winnigMove() {
		console.log('winningMove', '');

		const conditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // rows
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // colums
			[0, 4, 8],
			[2, 4, 6] // diagonal
		];
		for (const condition of conditions) {
			if (
				this.squares[condition[0]] !== this.cellEmpty &&
				this.squares[condition[0]] === this.squares[condition[1]] &&
				this.squares[condition[1]] === this.squares[condition[2]]
			) {
				return true;
			}
		}
		return false;
	}

	restartGame() {
		this.squares = Array(9).fill(this.cellEmpty);
		this.player = this.cellPlayer;
		this.winner = null;
	}
}
