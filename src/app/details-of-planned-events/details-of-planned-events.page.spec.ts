import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsOfPlannedEventsPage } from './details-of-planned-events.page';

describe('DetailsOfPlannedEventsPage', () => {
  let component: DetailsOfPlannedEventsPage;
  let fixture: ComponentFixture<DetailsOfPlannedEventsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOfPlannedEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsOfPlannedEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
