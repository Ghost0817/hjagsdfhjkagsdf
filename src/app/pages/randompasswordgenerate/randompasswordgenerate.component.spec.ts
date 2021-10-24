import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandompasswordgenerateComponent } from './randompasswordgenerate.component';

describe('RandompasswordgenerateComponent', () => {
  let component: RandompasswordgenerateComponent;
  let fixture: ComponentFixture<RandompasswordgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandompasswordgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandompasswordgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
