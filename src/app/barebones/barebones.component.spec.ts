import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarebonesComponent } from './barebones.component';

describe('BarebonesComponent', () => {
  let component: BarebonesComponent;
  let fixture: ComponentFixture<BarebonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarebonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarebonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
