import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HelperService } from 'src/app/blocks/helper/helper.service';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-page-details',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class DetailsPage implements OnInit {
	helper: any;

	item: any;

	constructor(private dataService: DataService, private route: ActivatedRoute) {
		this.helper = new HelperService('DetailsPage');

		this.helper.log('constructor');
	}

	ngOnInit() {
		/*
		
		const itemID = this.route.snapshot.paramMap.get('ID');

		this.helper.log('ngOnInit', `getItem(${itemID})`);

		const result = this.dataService.getItem(itemID);

		this.helper.log('ngOnInit', `getItem=`);
		console.log(result);

		this.helper.log('ngOnInit', 'subscribe');
		result.subscribe((item) => {
			this.item = item;
			this.helper.log('ngOnInit', 'found ' + this.item);
		});
		*/

		this.item = this.dataService.getCurrentItem();
	}

	ngOnDestroy() {
		this.helper.log('ngOnDestroy');
	}

	ionViewWillEnter() {
		this.helper.log('ionViewWillEnter');
	}
	ionViewDidEnter() {
		this.helper.log('ionViewDidEnter');
	}
	ionViewWillLeave() {
		this.helper.log('ionViewWillLeave');
	}
	ionViewDidLeave() {
		this.helper.log('ionViewDidLeave');
	}
}
