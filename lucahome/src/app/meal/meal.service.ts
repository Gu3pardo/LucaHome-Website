import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Meal } from './meal';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class MealService {

  public mealList = new BehaviorSubject<Meal[]>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) { }

  public GetMealList(): void {
    // TODO add command
    let response = this.apiService.SendCommand("GetMealList");
  }

  public UpdateMeal(meal: Meal): void {
    // TODO add command
    let response = this.apiService.SendCommand(`UpdateMeal: ${meal.toString()}`);
  }

}
