import { TestBed, inject } from '@angular/core/testing';

import { ProductsdeactivateService } from './productsdeactivate.service';

describe('ProductsdeactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsdeactivateService]
    });
  });

  it('should be created', inject([ProductsdeactivateService], (service: ProductsdeactivateService) => {
    expect(service).toBeTruthy();
  }));
});
