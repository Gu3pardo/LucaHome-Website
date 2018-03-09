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
    const errorJson = "Error: UnitTest";
    expect(() => UserConverter.ConvertJson(errorJson)).toThrow(errorJson);
  });
});
