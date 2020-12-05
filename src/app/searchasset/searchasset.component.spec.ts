import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchassetComponent } from './searchasset.component';

describe('SearchassetComponent', () => {
  let component: SearchassetComponent;
  let fixture: ComponentFixture<SearchassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
