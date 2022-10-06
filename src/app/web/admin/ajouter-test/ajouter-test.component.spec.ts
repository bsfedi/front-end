import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTestComponent } from './ajouter-test.component';

describe('AjouterTestComponent', () => {
  let component: AjouterTestComponent;
  let fixture: ComponentFixture<AjouterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
