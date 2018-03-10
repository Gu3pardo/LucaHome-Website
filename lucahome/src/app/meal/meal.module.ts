import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealComponent } from "./component/meal.component";
import { MealService } from "./services/meal.service";

@NgModule({
  declarations: [
    MealComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MealService
  ],
  exports: [
    MealComponent
  ]
})
export class MealModule { }
