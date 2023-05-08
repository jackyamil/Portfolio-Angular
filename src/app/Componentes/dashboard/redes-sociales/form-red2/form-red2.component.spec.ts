import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRed2Component } from './form-red2.component';

describe('FormRed2Component', () => {
  let component: FormRed2Component;
  let fixture: ComponentFixture<FormRed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRed2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
