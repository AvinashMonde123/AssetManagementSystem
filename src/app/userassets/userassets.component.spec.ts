import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassetsComponent } from './userassets.component';

describe('UserassetsComponent', () => {
  let component: UserassetsComponent;
  let fixture: ComponentFixture<UserassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
