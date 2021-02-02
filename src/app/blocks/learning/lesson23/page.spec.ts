import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson23Page } from './pages/page';

describe('Lesson23Page', () => {
	let component: Lesson23Page;
	let fixture: ComponentFixture<Lesson23Page>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Lesson23Page],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(Lesson23Page);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
