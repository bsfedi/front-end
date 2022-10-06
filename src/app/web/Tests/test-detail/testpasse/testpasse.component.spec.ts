import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpasseComponent } from './testpasse.component';

describe('TestpasseComponent', () => {
  let component: TestpasseComponent;
  let fixture: ComponentFixture<TestpasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
