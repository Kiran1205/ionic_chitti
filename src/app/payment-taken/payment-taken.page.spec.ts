import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentTakenPage } from './payment-taken.page';

describe('PaymentTakenPage', () => {
  let component: PaymentTakenPage;
  let fixture: ComponentFixture<PaymentTakenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTakenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentTakenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
