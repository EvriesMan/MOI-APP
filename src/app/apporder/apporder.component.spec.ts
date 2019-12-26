import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporderComponent } from './apporder.component';

describe('ApporderComponent', () => {
  let component: ApporderComponent;
  let fixture: ComponentFixture<ApporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
