import { TestBed, inject } from '@angular/core/testing';
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

  it('null json should throw error', () => {
    expect(() => MealConverter.ConvertJson(null)).toThrow("NoJsonProvided");
  });

  it('json with should return default list', () => {
    const errorJson = "{\"Error\":\"UnitTest\"}";
    let actual = MealConverter.ConvertJson(JSON.parse(errorJson));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe("Monday");
  });

  it('json with should return default list', () => {
    const errorJson = "{\"Invalid\":\"\"}";
    let actual = MealConverter.ConvertJson(JSON.parse(errorJson));
    expect(actual.length).toBe(7);
    expect(actual[0].weekday).toBe("Monday");
  });
});
