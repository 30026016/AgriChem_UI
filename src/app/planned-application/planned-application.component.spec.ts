import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedApplicationComponent } from './planned-application.component';

describe('PlannedApplicationComponent', () => {
  let component: PlannedApplicationComponent;
  let fixture: ComponentFixture<PlannedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
