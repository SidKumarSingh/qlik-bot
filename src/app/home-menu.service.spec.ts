import { TestBed } from '@angular/core/testing';

import { HomeMenuService } from './home-menu.service';

describe('HomeMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeMenuService = TestBed.get(HomeMenuService);
    expect(service).toBeTruthy();
  });
});
