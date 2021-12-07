import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbNewClientsComponent } from './nb-new-clients.component';

describe('NbNewClientsComponent', () => {
  let component: NbNewClientsComponent;
  let fixture: ComponentFixture<NbNewClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbNewClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbNewClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
