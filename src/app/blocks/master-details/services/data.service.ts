import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HelperService } from '../../helper/helper.service';
import { DataModel } from './data.model';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	helper: any;

	URL = 'https://restcountries.eu/rest/v2/all';

	items;

	currentItem: any;

	constructor(public http: HttpClient) {
		this.helper = new HelperService('DataService');
		this.helper.log('constructor');
	}

	getItems() {
		let result = null;

		if (this.items) {
			this.helper.log('getItems', 'return cached items with ' + this.items.length + ' entries');

			result = of(this.items);
		} else {
			this.helper.log('getItems', 'retrieve items');

			result = this.http.get<DataModel[]>(this.URL); // .pipe(map(this.processItems, this));
		}

		this.helper.log('getItems', 'DONE');
		return result;
	}

	processItems(data: any) {
		this.items = data;
		this.helper.log('processItems', 'items has ' + data.length + ' entries');

		return this.items;
	}

	getItem(alpha2Code: string): Observable<DataModel> {
		this.helper.log('getItem', 'fiter for alpha2Code=' + alpha2Code);

		const items = this.getItems();
		this.helper.log('getItem', 'items=');
		console.log(items);

		const result = items.pipe(filter((item: DataModel) => item.alpha2Code == alpha2Code));
		this.helper.log('getItem', 'result=');
		console.log(result);

		this.helper.log('getItem', 'DONE');
		return result;

		/*
		this.getItems().subscribe((data) => {
			this.helper.log('getItem', 'in subscribe: got items with ' + data.length + ' entries');

			let found = null;

			data.forEach((item) => {
				// this.helper.log('getItem', 'checking if ' + item.alpha2Code + '=' + alpha2Code);

				if (item.alpha2Code == alpha2Code) {
					// this.helper.log('getItem', 'found alpha2Code=' + item.name);
					found = item;
					// return;
				}
			});

			this.helper.log('getItem', 'found ' + found.name);
			return found;
		});

		this.helper.log('getItem', 'DONE');
		*/
	}

	setCurrentItem(item: any) {
		this.currentItem = item;
	}

	getCurrentItem(): any {
		return this.currentItem;
	}
}
