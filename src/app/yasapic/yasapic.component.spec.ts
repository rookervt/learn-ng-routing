import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YasapicComponent } from './yasapic.component';

describe('YasapicComponent', () => {
  let component: YasapicComponent;
  let fixture: ComponentFixture<YasapicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YasapicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YasapicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
