import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedemoComponent } from './servicedemo.component';

describe('ServicedemoComponent', () => {
  let component: ServicedemoComponent;
  let fixture: ComponentFixture<ServicedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
