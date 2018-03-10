import { TestBed, inject } from '@angular/core/testing';
import { SecurityConverter } from './security-converter.c';

describe('SecurityConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityConverter]
    });
  });

  it('should be created', inject([SecurityConverter], (securityConverter: SecurityConverter) => {
    expect(securityConverter).toBeTruthy();
  }));

  it('null json should throw error', () => {
    expect(() => SecurityConverter.ConvertJson(null)).toThrow("NoJsonProvided");
  });

  it('json with error should throw errorJson', () => {
    const errorJson = "{\"Error\":\"UnitTest\"}";
    expect(() => SecurityConverter.ConvertJson(JSON.parse(errorJson))).toThrow("UnitTest");
  });

  it('json with invalid data should throw NoValidJson', () => {
    const errorJson = "{\"Invalid\":\"\"}";
    expect(() => SecurityConverter.ConvertJson(JSON.parse(errorJson))).toThrow("NoValidJson");
  });
});
