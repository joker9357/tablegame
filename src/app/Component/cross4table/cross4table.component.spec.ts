import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cross4tableComponent } from './cross4table.component';

describe('Cross4tableComponent', () => {
  let component: Cross4tableComponent;
  let fixture: ComponentFixture<Cross4tableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cross4tableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cross4tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
