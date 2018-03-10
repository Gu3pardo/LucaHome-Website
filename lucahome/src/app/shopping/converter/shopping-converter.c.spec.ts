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

  it('json with error should throw errorJson', () => {
    const errorJson = "{\"Error\":\"UnitTest\"}";
    expect(() => ShoppingConverter.ConvertJson(JSON.parse(errorJson))).toThrow("UnitTest");
  });

  it('json with invalid data should throw NoValidJson', () => {
    const errorJson = "{\"Invalid\":\"\"}";
    expect(() => ShoppingConverter.ConvertJson(JSON.parse(errorJson))).toThrow("NoValidJson");
  });
});
