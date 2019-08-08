import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterConatinerComponent } from './footer-conatiner.component';

describe('FooterConatinerComponent', () => {
  let component: FooterConatinerComponent;
  let fixture: ComponentFixture<FooterConatinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterConatinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
