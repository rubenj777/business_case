import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbOrdersComponent } from './nb-orders.component';

describe('NbCommandesComponent', () => {
  let component: NbOrdersComponent;
  let fixture: ComponentFixture<NbOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbOrdersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
