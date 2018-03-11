import { TestBed, inject } from '@angular/core/testing';
import { ShoppingConverter } from './shopping-converter.c';
import { ShoppingItem } from "../interfaces/shopping-item";
import { ShoppingItemType } from "../enums/shopping-item-type.e";

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

  it('json with failedSuccess data should throw NoSuccessJson', () => {
    const failedSuccessString = '{"Category":"ShoppingItem","Action":"Get","Success":false,"Data":[]}';
    const failedSuccessJson = JSON.parse(failedSuccessString);
    expect(() => ShoppingConverter.ConvertJson(failedSuccessJson)).toThrow("NoSuccessJson");
  });

  it('json with data size 0 should return empty array', () => {
    const invalidLengthString = '{"Category":"ShoppingItem","Action":"Get","Success":true,"Data":[]}';
    const invalidLengthJson = JSON.parse(invalidLengthString);

    const actual = ShoppingConverter.ConvertJson(invalidLengthJson);

    expect(actual.length).toBe(0);
  });

  it('json with invalid data should throw NoValidJsonProperty', () => {
    const invalidString = '{"Category":"ShoppingItem","Action":"Get","Success":true,"Data":[{"UnitTest":{}}]}';
    const invalidJson = JSON.parse(invalidString);
    expect(() => ShoppingConverter.ConvertJson(invalidJson)).toThrow("NoValidJsonProperty");
  });

  it('json with valid data should return expected value', () => {
    const validString = '{"Category":"ShoppingItem","Action":"Get","Success":true,"Data":['
      + '{"ShoppingItem":'
      + '{'
      + '"Uuid":"Uuid",'
      + '"Name":"Name",'
      + '"Type":"Other",'
      + '"Quantity":2,'
      + '"Unit":"Unit",'
      + '"CreationTime":0,'
      + '"SentDay7Reminder":true'
      + '}}'
      + ']'
      + '}';
    const validJson = JSON.parse(validString);

    const expected: ShoppingItem = { uuid: "Uuid", name: "Name", type: ShoppingItemType.Other, quantity: 2, unit: "Unit" };

    const actual = ShoppingConverter.ConvertJson(validJson);

    expect(actual.length).toBe(1);

    expect(actual[0].uuid).toBe(expected.uuid);
    expect(actual[0].name).toBe(expected.name);
    expect(actual[0].type).toBe(expected.type);
    expect(actual[0].quantity).toBe(expected.quantity);
    expect(actual[0].unit).toBe(expected.unit);
  });
});
