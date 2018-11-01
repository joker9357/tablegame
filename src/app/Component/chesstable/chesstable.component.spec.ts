import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChesstableComponent } from './chesstable.component';

describe('ChesstableComponent', () => {
  let component: ChesstableComponent;
  let fixture: ComponentFixture<ChesstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChesstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChesstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
