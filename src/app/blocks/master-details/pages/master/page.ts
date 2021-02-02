import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { HelperService } from 'src/app/blocks/helper/helper.service';

import { DataModel } from '../../services/data.model';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-page-master',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class MasterPage implements OnInit {
	helper: any;

	items: any;
	loading = true;

	constructor(
		private router: Router,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController,
		public dataService: DataService,
	) {
		this.helper = new HelperService('MasterPage');
		this.helper.log('constructor');
	}

	ngOnInit() {
		this.helper.log('ngOnInit', 'get items');
		this.dataService.getItems().subscribe((data: any) => {
			this.items = data;
			this.helper.log('ngOnInit', 'items: ' + this.items.length);

			this.loading = true;
		});
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

	navigateTo(item: DataModel) {
		this.dataService.setCurrentItem(item);
		this.router.navigateByUrl('blocks/master-details/details/' + item.alpha2Code);
	}

	async addFavorite(slidingItem: HTMLIonItemSlidingElement, data: any) {
		// Close the open item
		slidingItem.close();

		// Create a toast
		const toast = await this.toastCtrl.create({
			header: `${data.name} was successfully added as a favorite.`,
			duration: 3000,
			buttons: [
				{
					text: 'Close',
					role: 'cancel',
				},
			],
		});

		await toast.present();
	}

	async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
		const alert = await this.alertCtrl.create({
			header: title,
			message: 'Would you like to remove this session from your favorites?',
			buttons: [
				{
					text: 'Cancel',
					handler: () => {
						// they clicked the cancel button, do not remove the session
						// close the sliding item and hide the option buttons
						slidingItem.close();
					},
				},
				{
					text: 'Remove',
					handler: () => {
						console.log('Favorite removed');

						// close the sliding item and hide the option buttons
						slidingItem.close();
					},
				},
			],
		});

		await alert.present();
	}
}
