import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";
import { Weekday } from "../enums/weekday.e";

import { MealService } from './meal.service';

describe('MealService', () => {
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let apiServiceMock = {
    mealListData: new BehaviorSubject(""),
    editMealData: new BehaviorSubject(""),
    LoadMealListData: () => { },
    EditMeal: (data: string): string => { return data; }
  };

  beforeEach(() => {
    spyOn(apiServiceMock, "LoadMealListData");
    spyOn(apiServiceMock, "EditMeal");

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
    const meal = {
      uuid: "Uuid1",
      title: "Title1",
      description: "Description1",
      weekday: Weekday.Sunday,
      day: 18,
      month: 3,
      year: 2018,
      shoppingItemUuidList: [
        "UUID1", "UUID2", "uuid3"
      ]
    };

    service.UpdateMeal(meal);

    expect(apiServiceMock.EditMeal).toHaveBeenCalledWith("MEAL::UPDATE::Uuid1::Title1::Description1::0::18::3::2018::UUID1,,UUID2,,uuid3");
  }));
});
