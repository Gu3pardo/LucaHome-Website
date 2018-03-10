import { TestBed, inject } from '@angular/core/testing';

import { TemperatureConverter } from './temperature-converter.c';

describe('TemperatureConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureConverter]
    });
  });

  it('should be created', inject([TemperatureConverter], (temperatureConverter: TemperatureConverter) => {
    expect(temperatureConverter).toBeTruthy();
  }));

  it('null json should throw error', () => {
    expect(() => TemperatureConverter.ConvertJson(null)).toThrow("NoJsonProvided");
  });

  it('json with should throw errorJson', () => {
    const errorJson = "{\"Error\":\"UnitTest\"}";
    expect(() => TemperatureConverter.ConvertJson(JSON.parse(errorJson))).toThrow("UnitTest");
  });

  it('json with invalid data should throw NoValidJson', () => {
    const errorJson = "{\"Invalid\":\"\"}";
    expect(() => TemperatureConverter.ConvertJson(JSON.parse(errorJson))).toThrow("NoValidJson");
  });
});
