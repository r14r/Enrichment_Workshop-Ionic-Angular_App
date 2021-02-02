import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HelperService {
	prefix: string;

	constructor(prefix: string) {
		this.prefix = prefix;
	}

	log(func: string, line: string = '') {
		const getTimeStamp = new Date().toISOString().split('T')[1].slice(0, -1);

		console.log(`[${getTimeStamp}] ${this.prefix}/${func}| ${line}`);
	}
}
