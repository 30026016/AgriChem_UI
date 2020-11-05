import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractmanagerComponent } from './contractmanager.component';

describe('ContractmanagerComponent', () => {
  let component: ContractmanagerComponent;
  let fixture: ComponentFixture<ContractmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
