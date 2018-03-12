import { TestBed, inject } from '@angular/core/testing';
import { Weekday } from "../enums/weekday.e";
import { Meal } from "../interfaces/meal";
import { MealConverter } from './meal-converter.c';

describe('MealConverter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealConverter]
    });
  });

  it('should be created', inject([MealConverter], (mealConverter: MealConverter) => {
    expect(mealConverter).toBeTruthy();
  }));

  it('null json should return default list', () => {
    let actual = MealConverter.ConvertJson(null);
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe(Weekday.Sunday);
    expect(actual[1].weekday).toBe(Weekday.Monday);
    expect(actual[2].weekday).toBe(Weekday.Tuesday);
    expect(actual[3].weekday).toBe(Weekday.Wednesday);
    expect(actual[4].weekday).toBe(Weekday.Thursday);
    expect(actual[5].weekday).toBe(Weekday.Friday);
    expect(actual[6].weekday).toBe(Weekday.Saturday);
    expect(actual[0].uuid).toBe("4C72B2E8-0040-4AB2-83CB-317ECB8ED206");
    expect(actual[1].uuid).toBe("5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C");
    expect(actual[2].uuid).toBe("A7B2E697-A0BC-42D9-9016-A12EA363F8F6");
    expect(actual[3].uuid).toBe("0DED99B0-877D-4E71-A070-4A757F90C9D7");
    expect(actual[4].uuid).toBe("FBF69CF8-FC12-49E1-962D-245148CDB67A");
    expect(actual[5].uuid).toBe("1AE61FC6-A449-4685-99AE-7DDAE8BA86F9");
    expect(actual[6].uuid).toBe("5B3F6F42-2B9A-4A85-9CD7-09C952999188");
  });

  it('json with should return default list', () => {
    const errorJson = "{\"Error\":\"UnitTest\"}";
    let actual = MealConverter.ConvertJson(JSON.parse(errorJson));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe(Weekday.Sunday);
    expect(actual[1].weekday).toBe(Weekday.Monday);
    expect(actual[2].weekday).toBe(Weekday.Tuesday);
    expect(actual[3].weekday).toBe(Weekday.Wednesday);
    expect(actual[4].weekday).toBe(Weekday.Thursday);
    expect(actual[5].weekday).toBe(Weekday.Friday);
    expect(actual[6].weekday).toBe(Weekday.Saturday);
    expect(actual[0].uuid).toBe("4C72B2E8-0040-4AB2-83CB-317ECB8ED206");
    expect(actual[1].uuid).toBe("5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C");
    expect(actual[2].uuid).toBe("A7B2E697-A0BC-42D9-9016-A12EA363F8F6");
    expect(actual[3].uuid).toBe("0DED99B0-877D-4E71-A070-4A757F90C9D7");
    expect(actual[4].uuid).toBe("FBF69CF8-FC12-49E1-962D-245148CDB67A");
    expect(actual[5].uuid).toBe("1AE61FC6-A449-4685-99AE-7DDAE8BA86F9");
    expect(actual[6].uuid).toBe("5B3F6F42-2B9A-4A85-9CD7-09C952999188");
  });

  it('json with should return default list', () => {
    const errorJson = "{\"Invalid\":\"\"}";
    let actual = MealConverter.ConvertJson(JSON.parse(errorJson));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe(Weekday.Sunday);
    expect(actual[1].weekday).toBe(Weekday.Monday);
    expect(actual[2].weekday).toBe(Weekday.Tuesday);
    expect(actual[3].weekday).toBe(Weekday.Wednesday);
    expect(actual[4].weekday).toBe(Weekday.Thursday);
    expect(actual[5].weekday).toBe(Weekday.Friday);
    expect(actual[6].weekday).toBe(Weekday.Saturday);
    expect(actual[0].uuid).toBe("4C72B2E8-0040-4AB2-83CB-317ECB8ED206");
    expect(actual[1].uuid).toBe("5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C");
    expect(actual[2].uuid).toBe("A7B2E697-A0BC-42D9-9016-A12EA363F8F6");
    expect(actual[3].uuid).toBe("0DED99B0-877D-4E71-A070-4A757F90C9D7");
    expect(actual[4].uuid).toBe("FBF69CF8-FC12-49E1-962D-245148CDB67A");
    expect(actual[5].uuid).toBe("1AE61FC6-A449-4685-99AE-7DDAE8BA86F9");
    expect(actual[6].uuid).toBe("5B3F6F42-2B9A-4A85-9CD7-09C952999188");
  });

  it('json with failedSuccess data should return default list', () => {
    const errorJson = '{"Category":"Meal","Action":"Get","Success":false,"Data":[]}';
    let actual = MealConverter.ConvertJson(JSON.parse(errorJson));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe(Weekday.Sunday);
    expect(actual[1].weekday).toBe(Weekday.Monday);
    expect(actual[2].weekday).toBe(Weekday.Tuesday);
    expect(actual[3].weekday).toBe(Weekday.Wednesday);
    expect(actual[4].weekday).toBe(Weekday.Thursday);
    expect(actual[5].weekday).toBe(Weekday.Friday);
    expect(actual[6].weekday).toBe(Weekday.Saturday);
    expect(actual[0].uuid).toBe("4C72B2E8-0040-4AB2-83CB-317ECB8ED206");
    expect(actual[1].uuid).toBe("5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C");
    expect(actual[2].uuid).toBe("A7B2E697-A0BC-42D9-9016-A12EA363F8F6");
    expect(actual[3].uuid).toBe("0DED99B0-877D-4E71-A070-4A757F90C9D7");
    expect(actual[4].uuid).toBe("FBF69CF8-FC12-49E1-962D-245148CDB67A");
    expect(actual[5].uuid).toBe("1AE61FC6-A449-4685-99AE-7DDAE8BA86F9");
    expect(actual[6].uuid).toBe("5B3F6F42-2B9A-4A85-9CD7-09C952999188");
  });

  it('json with data size 0 should return default list', () => {
    const errorJson = '{"Category":"Meal","Action":"Get","Success":true,"Data":[]}';
    let actual = MealConverter.ConvertJson(JSON.parse(errorJson));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe(Weekday.Sunday);
    expect(actual[1].weekday).toBe(Weekday.Monday);
    expect(actual[2].weekday).toBe(Weekday.Tuesday);
    expect(actual[3].weekday).toBe(Weekday.Wednesday);
    expect(actual[4].weekday).toBe(Weekday.Thursday);
    expect(actual[5].weekday).toBe(Weekday.Friday);
    expect(actual[6].weekday).toBe(Weekday.Saturday);
    expect(actual[0].uuid).toBe("4C72B2E8-0040-4AB2-83CB-317ECB8ED206");
    expect(actual[1].uuid).toBe("5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C");
    expect(actual[2].uuid).toBe("A7B2E697-A0BC-42D9-9016-A12EA363F8F6");
    expect(actual[3].uuid).toBe("0DED99B0-877D-4E71-A070-4A757F90C9D7");
    expect(actual[4].uuid).toBe("FBF69CF8-FC12-49E1-962D-245148CDB67A");
    expect(actual[5].uuid).toBe("1AE61FC6-A449-4685-99AE-7DDAE8BA86F9");
    expect(actual[6].uuid).toBe("5B3F6F42-2B9A-4A85-9CD7-09C952999188");
  });

  it('json with data size 2 and invalid content should return default list size', () => {
    const invalidLengthString = '{"Category":"Meal","Action":"Get","Success":true,"Data":[{"Meal":""},{"Meal":""}]}';
    let actual = MealConverter.ConvertJson(JSON.parse(invalidLengthString));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe(Weekday.Sunday);
    expect(actual[1].weekday).toBe(Weekday.Monday);
    expect(actual[2].weekday).toBe(Weekday.Tuesday);
    expect(actual[3].weekday).toBe(Weekday.Wednesday);
    expect(actual[4].weekday).toBe(Weekday.Thursday);
    expect(actual[5].weekday).toBe(Weekday.Friday);
    expect(actual[6].weekday).toBe(Weekday.Saturday);
    expect(actual[0].uuid).toBe("4C72B2E8-0040-4AB2-83CB-317ECB8ED206");
    expect(actual[1].uuid).toBe("5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C");
    expect(actual[2].uuid).toBe("A7B2E697-A0BC-42D9-9016-A12EA363F8F6");
    expect(actual[3].uuid).toBe("0DED99B0-877D-4E71-A070-4A757F90C9D7");
    expect(actual[4].uuid).toBe("FBF69CF8-FC12-49E1-962D-245148CDB67A");
    expect(actual[5].uuid).toBe("1AE61FC6-A449-4685-99AE-7DDAE8BA86F9");
    expect(actual[6].uuid).toBe("5B3F6F42-2B9A-4A85-9CD7-09C952999188");
  });
});
