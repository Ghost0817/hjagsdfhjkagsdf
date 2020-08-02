import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingTutorComponent } from './typing-tutor.component';

describe('TypingTutorComponent', () => {
  let component: TypingTutorComponent;
  let fixture: ComponentFixture<TypingTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
