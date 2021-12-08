import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketInfosComponent } from './basket-infos.component';

describe('BasketInfosComponent', () => {
  let component: BasketInfosComponent;
  let fixture: ComponentFixture<BasketInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
