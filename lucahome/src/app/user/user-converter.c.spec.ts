import { TestBed, inject } from '@angular/core/testing';

import { UserConverter } from './user-converter.c';

describe('UserConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserConverter]
    });
  });

  it('should be created', inject([UserConverter], (userConverter: UserConverter) => {
    expect(userConverter).toBeTruthy();
  }));

  it('null json should throw error', () => {
    expect(() => UserConverter.ConvertJson(null)).toThrow("NoJsonProvided");
  });

  it('json with should throw errorJson', () => {
    const errorJson = "{\"Error\":\"UnitTest\"}";
    expect(() => UserConverter.ConvertJson(JSON.parse(errorJson))).toThrow("UnitTest");
  });

  it('json with invalid data should throw NoValidJson', () => {
    const errorJson = "{\"Invalid\":\"\"}";
    expect(() => UserConverter.ConvertJson(JSON.parse(errorJson))).toThrow("NoValidJson");
  });

  it('json with valid data and validation true should return true', () => {
    const validJson = "{\"Category\":\"User\",\"Action\":\"Validate\",\"Success\":true,\"Data\":\"\"}";
    expect(() => UserConverter.ConvertJson(JSON.parse(validJson))).toBeTruthy();
  });

  it('json with valid data and validation false should throw error', () => {
    const failedValidationJson = "{\"Category\":\"User\",\"Error\":250,\"Success\":false,\"Data\":\"Failed to validate user!\"}";
    expect(() => UserConverter.ConvertJson(JSON.parse(failedValidationJson))).toThrow(250);
  });
});
