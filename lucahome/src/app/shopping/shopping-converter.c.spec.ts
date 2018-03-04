import { TestBed, inject } from '@angular/core/testing';

import { ShoppingConverter } from './shopping-converter.c';

describe('ShoppingConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingConverter]
    });
  });

  it('should be created', inject([ShoppingConverter], (shoppingConverter: ShoppingConverter) => {
    expect(shoppingConverter).toBeTruthy();
  }));

  it('null json should throw error', () => {
    expect(() => ShoppingConverter.ConvertJson(null)).toThrow("NoJsonProvided");
  });
});
