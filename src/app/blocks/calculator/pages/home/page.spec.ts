import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculatorPage } from './page';

describe('CalculatorPage', () => {
	let component: CalculatorPage;
	let fixture: ComponentFixture<CalculatorPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CalculatorPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(CalculatorPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
