import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HelperService } from 'src/app/blocks/helper/helper.service';
import { DataModel } from '../../services/data.model';

@Component({
	selector: 'app-component-details',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
	helper: any;
	
  @Input() item: DataModel;
  
	constructor() {
		this.helper = new HelperService('DetailsDataComponent');

		this.helper.log('constructor');
	}

	ngOnInit() {}
}
