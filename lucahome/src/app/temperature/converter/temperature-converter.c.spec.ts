import { TestBed, inject } from '@angular/core/testing';
import { TemperatureConverter } from './temperature-converter.c';
import { Temperature } from '../interfaces/temperature';

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
    const errorJson = '{"Error":"UnitTest"}';
    expect(() => TemperatureConverter.ConvertJson(JSON.parse(errorJson))).toThrow("UnitTest");
  });

  it('json with invalid data should throw NoValidJson', () => {
    const errorJson = '{"Invalid":"","NoData":"NoData"}';
    expect(() => TemperatureConverter.ConvertJson(JSON.parse(errorJson))).toThrow("NoValidJson");
  });

  it('json with failedSuccess data should throw NoSuccessJson', () => {
    const failedSuccessString = '{"Category":"Temperature","Action":"Get","Success":false,"Data":[]}';
    const failedSuccessJson = JSON.parse(failedSuccessString);
    expect(() => TemperatureConverter.ConvertJson(failedSuccessJson)).toThrow("NoSuccessJson");
  });

  it('json with data size 0 should throw InvalidLengthJson', () => {
    const invalidLengthString = '{"Category":"Temperature","Action":"Get","Success":true,"Data":[]}';
    const invalidLengthJson = JSON.parse(invalidLengthString);
    expect(() => TemperatureConverter.ConvertJson(invalidLengthJson)).toThrow("InvalidLengthJson");
  });

  it('json with data size 2 should throw InvalidLengthJson', () => {
    const invalidLengthString = '{"Category":"Temperature","Action":"Get","Success":true,"Data":[{"Temperature":""},{"Temperature":""}]}';
    const invalidLengthJson = JSON.parse(invalidLengthString);
    expect(() => TemperatureConverter.ConvertJson(invalidLengthJson)).toThrow("InvalidLengthJson");
  });

  it('json with invalid data should throw NoValidJsonProperty', () => {
    const invalidString = '{"Category":"Temperature","Action":"Get","Success":true,"Data":[{"UnitTest":{}}]}';
    const invalidJson = JSON.parse(invalidString);
    expect(() => TemperatureConverter.ConvertJson(invalidJson)).toThrow("NoValidJsonProperty");
  });

  it('json with valid data should return expected value', () => {
    const validString = '{"Category":"Temperature","Action":"Get","Success":true,"Data":['
      + '{"Temperature":'
      + '{'
      + '"Uuid":"Uuid",'
      + '"RoomUuid":"RoomUuid",'
      + '"Value":21.4,'
      + '"TemperatureType":1,'
      + '"Date":'
      + '{'
      + '"Day":10,'
      + '"Month":3,'
      + '"Year":2018'
      + '},'
      + '"Time":'
      + '{'
      + '"Hour":19,'
      + '"Minute":5'
      + '},'
      + '"SensorPath":"SensorPath",'
      + '"GraphPath":"GraphPath"'
      + '}}'
      + ']'
      + '}';
    const validJson = JSON.parse(validString);

    const expected: Temperature = { uuid: "Uuid", roomUuid: "RoomUuid", value: 21.4, date: new Date(), temperatureType: 1, sensorPath: "SensorPath", graphPath: "GraphPath" };

    const actual = TemperatureConverter.ConvertJson(validJson);

    expect(actual.uuid).toBe(expected.uuid);
    expect(actual.roomUuid).toBe(expected.roomUuid);
    expect(actual.value).toBe(expected.value);
    expect(actual.temperatureType).toBe(expected.temperatureType);
    expect(actual.sensorPath).toBe(expected.sensorPath);
    expect(actual.graphPath).toBe(expected.graphPath);
  });
});
