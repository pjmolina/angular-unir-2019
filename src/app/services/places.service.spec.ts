import { TestBed } from '@angular/core/testing';

import { PlacesService } from './places.service';

xdescribe('PlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacesService = TestBed.get(PlacesService);
    expect(service).toBeTruthy();
  });
});
