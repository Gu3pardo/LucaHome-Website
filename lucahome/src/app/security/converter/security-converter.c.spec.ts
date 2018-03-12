import { TestBed, inject } from '@angular/core/testing';
import { SecurityConverter } from './security-converter.c';
import { Security } from '../interfaces/security';

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

  it('json with failedSuccess data should throw NoSuccessJson', () => {
    const failedSuccessString = '{"Category":"Security","Action":"Get","Success":false,"Data":[]}';
    const failedSuccessJson = JSON.parse(failedSuccessString);
    expect(() => SecurityConverter.ConvertJson(failedSuccessJson)).toThrow("NoSuccessJson");
  });

  it('json with data size 0 should throw InvalidLengthJson', () => {
    const invalidLengthString = '{"Category":"Security","Action":"Get","Success":true,"Data":[]}';
    const invalidLengthJson = JSON.parse(invalidLengthString);
    expect(() => SecurityConverter.ConvertJson(invalidLengthJson)).toThrow("InvalidLengthJson");
  });

  it('json with data size 2 should throw InvalidLengthJson', () => {
    const invalidLengthString = '{"Category":"Security","Action":"Get","Success":true,"Data":[{"Security":""},{"Security":""}]}';
    const invalidLengthJson = JSON.parse(invalidLengthString);
    expect(() => SecurityConverter.ConvertJson(invalidLengthJson)).toThrow("InvalidLengthJson");
  });

  it('json with invalid data should throw NoValidJsonProperty', () => {
    const invalidString = '{"Category":"Security","Action":"Get","Success":true,"Data":[{"UnitTest":{}}]}';
    const invalidJson = JSON.parse(invalidString);
    expect(() => SecurityConverter.ConvertJson(invalidJson)).toThrow("NoValidJsonProperty");
  });

  it('json with valid data should return expected value', () => {
    const validString = '{"Category":"Security","Action":"Get","Success":true,"Data":['
      + '{"Security":'
      + '{'
      + '"Active":true,'
      + '"TaskActive":true'
      + '}}'
      + ']'
      + '}';
    const validJson = JSON.parse(validString);

    const expected: Security = { active: true, taskActive: true };

    const actual = SecurityConverter.ConvertJson(validJson);

    expect(actual.active).toBe(expected.active);
    expect(actual.taskActive).toBe(expected.taskActive);
  });
});
