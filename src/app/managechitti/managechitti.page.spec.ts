import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagechittiPage } from './managechitti.page';

describe('ManagechittiPage', () => {
  let component: ManagechittiPage;
  let fixture: ComponentFixture<ManagechittiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagechittiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagechittiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
