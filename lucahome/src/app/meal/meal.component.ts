import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from "../shared/dialog.service";
import { MealService } from "./meal.service";
import { Meal } from "./meal";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {

  weekdayArray: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  selectedMeal: Meal = { uuid: "", title: "", description: "", weekday: this.weekdayArray[0] };
  mealList: Meal[];

  constructor(
    private dialogService: DialogService,
    private mealService: MealService) {
  }

  ngOnInit() {
    this.mealService.mealList.subscribe(mealList => {
      if (mealList) {
        this.mealList = mealList;
        this.setSelectedMeal();
      }
    });
  }

  ngOnDestroy() {
    if (this.mealService.mealList) {
      this.mealService.mealList.unsubscribe();
    }
  }

  public selectWeekday(weekday: string): void {
    let selectedMeal = this.mealList.find(meal => meal.weekday === weekday);
    if (selectedMeal) {
      this.selectedMeal = selectedMeal;
    }
  }

  public editTitle(): void {
    console.log("Pressed editTitle");
  }

  public editDescription(): void {
    console.log("Pressed editDescription");
  }

  private setSelectedMeal(): void {
    if (this.mealList.length > 0) {
      let today = new Date();
      let weekday = this.weekdayArray[today.getDay()];

      let todayMeal = this.mealList.find(meal => meal.weekday === weekday);
      if (todayMeal) {
        this.selectedMeal = todayMeal;
      }
    }
  }
}
