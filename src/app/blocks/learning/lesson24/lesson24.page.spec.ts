import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson24Page } from './pages/page';

describe('Lesson24Page', () => {
	let component: Lesson24Page;
	let fixture: ComponentFixture<Lesson24Page>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Lesson24Page],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(Lesson24Page);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
