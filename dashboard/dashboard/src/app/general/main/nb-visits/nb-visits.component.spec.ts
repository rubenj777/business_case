import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbVisitsComponent } from './nb-visits.component';

describe('NbVisitsComponent', () => {
  let component: NbVisitsComponent;
  let fixture: ComponentFixture<NbVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
