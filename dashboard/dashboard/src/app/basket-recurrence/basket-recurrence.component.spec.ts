import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketRecurrenceComponent } from './basket-recurrence.component';

describe('BasketRecurrenceComponent', () => {
  let component: BasketRecurrenceComponent;
  let fixture: ComponentFixture<BasketRecurrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketRecurrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketRecurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
