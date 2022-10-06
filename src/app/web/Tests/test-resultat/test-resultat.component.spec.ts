import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResultatComponent } from './test-resultat.component';

describe('TestResultatComponent', () => {
  let component: TestResultatComponent;
  let fixture: ComponentFixture<TestResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestResultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
