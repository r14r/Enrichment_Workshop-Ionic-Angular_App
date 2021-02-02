import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
	providedIn: 'root',
})
export class StoreService {
	helper: any;
	data: any;

	constructor() {
		this.helper = new HelperService('StoreService');
		this.helper.log('constructor');
	}

	save(data) {
		this.data = data;

		this.helper.log('save', this.data);
	}

	load() {
		this.helper.log('load', this.data);

		return this.data;
	}
}
