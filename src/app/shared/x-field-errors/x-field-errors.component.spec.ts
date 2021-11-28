import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XFieldErrorsComponent } from './x-field-errors.component';

describe('XFieldErrorsComponent', () => {
  let component: XFieldErrorsComponent;
  let fixture: ComponentFixture<XFieldErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XFieldErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XFieldErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
