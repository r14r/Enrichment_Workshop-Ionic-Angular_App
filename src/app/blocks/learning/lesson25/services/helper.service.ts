import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HelperService {
	prefix: string;

	// Store data with save()
	data: any;

	constructor(p) {
		this.prefix = p;
		this.log('constructor');
	}

	log(func: string, line: string = '') {
		console.log(this.prefix + '::' + func + '|' + line);
	}

	save(data) {
		this.data = data;

		this.log('save', this.data);
	}

	load() {
		this.log('load', this.data);

		return this.data;
	}
}
