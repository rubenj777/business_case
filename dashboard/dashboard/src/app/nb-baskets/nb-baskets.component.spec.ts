import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbBasketsComponent } from './nb-baskets.component';

describe('NbPaniersComponent', () => {
  let component: NbBasketsComponent;
  let fixture: ComponentFixture<NbBasketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbBasketsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbBasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
