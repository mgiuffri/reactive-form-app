import { TestBed, inject } from '@angular/core/testing';

import { ComponentResolverService } from './component-resolver.service';

describe('ComponentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentResolverService]
    });
  });

  it('should be created', inject([ComponentResolverService], (service: ComponentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
