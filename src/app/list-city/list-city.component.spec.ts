import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCityComponent } from './list-city.component';

describe('ListCityComponent', () => {
  let component: ListCityComponent;
  let fixture: ComponentFixture<ListCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
