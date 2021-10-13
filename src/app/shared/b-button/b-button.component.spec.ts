import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BButtonComponent } from './b-button.component';

describe('BButtonComponent', () => {
  let component: BButtonComponent;
  let fixture: ComponentFixture<BButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
