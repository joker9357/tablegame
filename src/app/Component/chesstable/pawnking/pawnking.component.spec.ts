import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnkingComponent } from './pawnking.component';

describe('PawnkingComponent', () => {
  let component: PawnkingComponent;
  let fixture: ComponentFixture<PawnkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
