import { TestBed } from '@angular/core/testing';

import { ServiceForInterceptorService } from './service-for-interceptor.service';

describe('ServiceForInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceForInterceptorService = TestBed.get(ServiceForInterceptorService);
    expect(service).toBeTruthy();
  });
});
