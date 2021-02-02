import { Component, OnInit } from '@angular/core';

import { HelperService } from '../../services/helper.service';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-lesson-details',
	templateUrl: './details.page.html',
	styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
	helper: any;

	contact: any;

	constructor(public store: DataService) {
		this.helper = new HelperService('DetailsPage');

		this.helper.log('constructor');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');

		// Hole aktuellen kontakt
		this.contact = this.store.load();
	}
}
