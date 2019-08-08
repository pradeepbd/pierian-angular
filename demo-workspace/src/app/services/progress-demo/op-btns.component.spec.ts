import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpBtnsComponent } from './op-btns.component';

describe('OpBtnsComponent', () => {
  let component: OpBtnsComponent;
  let fixture: ComponentFixture<OpBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
