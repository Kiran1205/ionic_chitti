import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpaidhistoryPage } from './ppaidhistory.page';

describe('PpaidhistoryPage', () => {
  let component: PpaidhistoryPage;
  let fixture: ComponentFixture<PpaidhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpaidhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpaidhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
