import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Meal } from './meal';
import { MealConverter } from "./meal-converter.c";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class MealService implements OnInit, OnDestroy {

  private mealList$ = new BehaviorSubject<Meal[]>(null);

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
    this.apiService.mealListData.subscribe(data => {
      if (data) {
        let conversionResult;
        try {
          conversionResult = MealConverter.ConvertJson(JSON.parse(data));
        } catch (error) {
          this.toastService.DisplayError(error.toString());
        }
        if (conversionResult) {
          this.mealList$.next(conversionResult);
        }
      }
    });

    this.apiService.editMealData.subscribe(editData => {
      if (editData) {
        if (editData.indexOf("SUCCESS") >= 0) {
          this.LoadMealList();
        } else {
          this.toastService.DisplayError("Edit of Meal failed with error: " + editData);
        }
      }
    });

    this.LoadMealList();
  }

  ngOnDestroy(): void {
    this.apiService.mealListData.unsubscribe();
    this.apiService.editMealData.unsubscribe();
  }

  get mealList() { return this.mealList$; }

  public LoadMealList(): void {
    this.apiService.LoadMealListData();
  }

  public UpdateMeal(meal: Meal): void {
    // TODO add proper command
    let response = this.apiService.EditMeal(`UpdateMeal: ${meal.toString()}`);
  }
}
