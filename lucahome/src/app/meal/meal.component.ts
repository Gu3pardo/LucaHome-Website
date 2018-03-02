import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  weekdayArray: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  selectedWeekday: string = "Monday";
  title: string = "Vegan lasagne";
  description: string = "Cook like the instructions show you to cook!";

  constructor() { }

  ngOnInit() {
  }

  public selectWeekday(weekday: string): void {
    console.log(`Pressed on weekday ${weekday}`);
  }

  public editTitle(): void {
    console.log("Pressed editTitle");
  }

  public editDescription(): void {
    console.log("Pressed editDescription");
  }
}
