import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInfosComponent } from './orders-infos.component';

describe('OrdersInfosComponent', () => {
  let component: OrdersInfosComponent;
  let fixture: ComponentFixture<OrdersInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersInfosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
