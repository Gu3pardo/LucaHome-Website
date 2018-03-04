import { TestBed, inject } from '@angular/core/testing';

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
});
