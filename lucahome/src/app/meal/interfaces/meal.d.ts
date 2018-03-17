import { Weekday } from "../enums/weekday.e";

export interface Meal {
  uuid: string;
  title: string;
  description: string;
  weekday: Weekday;
  day: number;
  month: number;
  year: number;
  shoppingItemUuidList: string[];
}
