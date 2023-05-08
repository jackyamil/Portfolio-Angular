import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRed1Component } from './form-red1.component';

describe('FormRed1Component', () => {
  let component: FormRed1Component;
  let fixture: ComponentFixture<FormRed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRed1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
