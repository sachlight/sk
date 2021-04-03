import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorableComponent } from './memorable.component';

describe('MemorableComponent', () => {
  let component: MemorableComponent;
  let fixture: ComponentFixture<MemorableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
