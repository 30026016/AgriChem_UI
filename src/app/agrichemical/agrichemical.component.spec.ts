import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrichemicalComponent } from './agrichemical.component';

describe('AgrichemicalComponent', () => {
  let component: AgrichemicalComponent;
  let fixture: ComponentFixture<AgrichemicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrichemicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrichemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
