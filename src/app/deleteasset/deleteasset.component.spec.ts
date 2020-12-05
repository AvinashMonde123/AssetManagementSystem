import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteassetComponent } from './deleteasset.component';

describe('DeleteassetComponent', () => {
  let component: DeleteassetComponent;
  let fixture: ComponentFixture<DeleteassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
