import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Meal } from './meal';
import { MealConverter } from "./meal-converter.c";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class MealService {

  private mealList$ = new BehaviorSubject<Meal[]>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) {
    this.LoadMealList();
  }

  get mealList() { return this.mealList$; }

  public LoadMealList(): void {
    let jsonResponse = this.apiService.LoadMealListData();
    if (jsonResponse) {
      let conversionResult;
      try {
        conversionResult = MealConverter.ConvertJson(jsonResponse.getValue());
      } catch (error) {
        console.log(error);
      }
      if (conversionResult) {
        this.mealList$.next(conversionResult);
        this.toastService.DisplaySuccess("Successfully loaded list of meals!");
      }
    }
  }

  public UpdateMeal(meal: Meal): void {
    // TODO add command
    let response = this.apiService.UpdateMeal(`UpdateMeal: ${meal.toString()}`);
  }
}
