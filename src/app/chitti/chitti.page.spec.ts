import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChittiPage } from './chitti.page';

describe('ChittiPage', () => {
  let component: ChittiPage;
  let fixture: ComponentFixture<ChittiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChittiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChittiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
