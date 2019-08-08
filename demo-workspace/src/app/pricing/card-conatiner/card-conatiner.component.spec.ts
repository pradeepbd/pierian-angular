import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConatinerComponent } from './card-conatiner.component';

describe('CardConatinerComponent', () => {
  let component: CardConatinerComponent;
  let fixture: ComponentFixture<CardConatinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConatinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
