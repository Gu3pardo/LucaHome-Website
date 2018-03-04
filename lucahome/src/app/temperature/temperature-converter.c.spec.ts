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
});
