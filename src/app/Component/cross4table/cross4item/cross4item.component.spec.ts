import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cross4itemComponent } from './cross4item.component';

describe('Cross4itemComponent', () => {
  let component: Cross4itemComponent;
  let fixture: ComponentFixture<Cross4itemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cross4itemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cross4itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
