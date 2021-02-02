import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { HelperService } from '../../services/helper.service';
import { DataService } from '../../services/data.service';
import { jsPDF } from 'jspdf';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
	selector: 'app-master',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class MasterWithSliderPage implements OnInit {
	helper: any;

	items: any;

	constructor(private router: Router, public store: DataService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
		// Neue HelperService erstellen
		this.helper = new HelperService('MasterWithSliderPage');

		// Logmeldung anzeigen
		this.helper.log('constructor', 'Initialisierung');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');

		this.items = [
			{
				name: 'Max Mustermann',
				email: 'max@mustermann.de',
				photo: 'max_mustermann.png',
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
