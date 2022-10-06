import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTestComponent } from './modifier-test.component';

describe('ModifierTestComponent', () => {
  let component: ModifierTestComponent;
  let fixture: ComponentFixture<ModifierTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
