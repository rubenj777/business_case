import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageBasketValueComponent } from './average-basket-value.component';

describe('AverageBasketValueComponent', () => {
  let component: AverageBasketValueComponent;
  let fixture: ComponentFixture<AverageBasketValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageBasketValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageBasketValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
