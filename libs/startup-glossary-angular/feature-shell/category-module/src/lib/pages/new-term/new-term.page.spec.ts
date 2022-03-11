import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTermPage } from './new-term.page';

describe('NewTermPage', () => {
    let component: NewTermPage;
    let fixture: ComponentFixture<NewTermPage>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NewTermPage],
                imports: [IonicModule.forRoot()],
            }).compileComponents();

            fixture = TestBed.createComponent(NewTermPage);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
