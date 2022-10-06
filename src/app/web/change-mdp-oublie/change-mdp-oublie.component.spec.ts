import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMdpOublieComponent } from './change-mdp-oublie.component';

describe('ChangeMdpOublieComponent', () => {
  let component: ChangeMdpOublieComponent;
  let fixture: ComponentFixture<ChangeMdpOublieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMdpOublieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMdpOublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
