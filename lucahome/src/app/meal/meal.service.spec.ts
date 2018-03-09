import { TestBed, inject } from '@angular/core/testing';

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

import { MealService } from './meal.service';

describe('MealService', () => {
  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MealService,
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ToastService, useValue: toastServiceMock }
      ]
    });
  });

  it('should be created', inject([MealService], (service: MealService) => {
    expect(service).toBeTruthy();
  }));

  it('LoadMealList should call apiService.LoadMealListData', inject([MealService], (service: MealService) => {
    service.LoadMealList();

    expect(apiServiceMock.LoadMealListData).toHaveBeenCalled();
  }));

  it('UpdateMeal should call apiService.EditMeal', inject([MealService], (service: MealService) => {
    service.UpdateMeal({ uuid: "", title: "", description: "", weekday: "" });

    expect(apiServiceMock.EditMeal).toHaveBeenCalled();
  }));
});
