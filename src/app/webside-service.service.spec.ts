import { TestBed } from '@angular/core/testing';

import { WebsideServiceService } from './webside-service.service';

describe('WebsideServiceService', () => {
  let service: WebsideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
