import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTestsComponent } from './liste-tests.component';

describe('ListeTestsComponent', () => {
  let component: ListeTestsComponent;
  let fixture: ComponentFixture<ListeTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
