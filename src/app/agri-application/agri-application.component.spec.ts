import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriApplicationComponent } from './agri-application.component';

describe('AgriApplicationComponent', () => {
  let component: AgriApplicationComponent;
  let fixture: ComponentFixture<AgriApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
