import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { HelperService } from '../../services/helper.service';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-master',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class MasterPage implements OnInit {
	helper: any;

	items: any;

	constructor(private router: Router, public store: DataService) {
		// Neue HelperService erstellen
		this.helper = new HelperService('MasterPage');

		// Logmeldung anzeigen
		this.helper.log('constructor', 'Initialisierung');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');

		this.items = [
			{
				name: 'Max Mustermann',
				email: 'max@mustermann.de',
				photo: 'men/1.jpg',
			},
			{
				name: 'Daisy Duck',
				email: 'donald@disneyland.com',
				photo: 'women/45.jpg',
			},
		];

		this.helper.log('ngOnInit', this.items);
	}

	navigateTo(item) {
		this.helper.log('navigateTo', item);

		// Setze aktuellen kontakt
		this.store.save(item);

		this.router.navigateByUrl('/lesson/25/details');
	}
}
