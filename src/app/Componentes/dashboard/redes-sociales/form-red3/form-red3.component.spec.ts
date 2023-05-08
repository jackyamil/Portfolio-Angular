import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRed3Component } from './form-red3.component';

describe('FormRed3Component', () => {
  let component: FormRed3Component;
  let fixture: ComponentFixture<FormRed3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRed3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRed3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
