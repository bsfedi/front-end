import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsPasseListeComponent } from './tests-passe-liste.component';

describe('TestsPasseListeComponent', () => {
  let component: TestsPasseListeComponent;
  let fixture: ComponentFixture<TestsPasseListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsPasseListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsPasseListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
