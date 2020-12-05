import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentassetsComponent } from './currentassets.component';

describe('CurrentassetsComponent', () => {
  let component: CurrentassetsComponent;
  let fixture: ComponentFixture<CurrentassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
