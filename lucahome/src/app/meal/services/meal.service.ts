import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Meal } from "../interfaces/meal";
import { MealConverter } from "../converter/meal-converter.c";
import { WeekdayUtil } from "../utils/weekday-util";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";

@Injectable()
export class MealService implements OnInit, OnDestroy {

  private mealList$ = new BehaviorSubject<Meal[]>(null);

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService) {
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
  }

  ngOnInit(): void {
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
    const uuid: string = meal.uuid;
    const title: string = meal.title;
    const description: string = meal.description;
    const weekday: number = WeekdayUtil.getIndexOfWeekday(meal.weekday);
    const day: number = meal.day;
    const month: number = meal.month;
    const year: number = meal.year;
    const listString: string = this.getShoppingItemUuidListString(meal);

    this.apiService.EditMeal(`MEAL::UPDATE::${uuid}::${title}::${description}::${weekday}::${day}::${month}::${year}::${listString}`);
  }

  private getShoppingItemUuidListString(meal: Meal): string {
    let listString = "";

    for (let item of meal.shoppingItemUuidList) {
      listString += item + ",,";
    }

    if (listString) {
      listString = listString.substr(0, listString.length - 2);
    }

    return listString;
  }
}
