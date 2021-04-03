import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsWorkComponent } from './lets-work.component';

describe('LetsWorkComponent', () => {
  let component: LetsWorkComponent;
  let fixture: ComponentFixture<LetsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
