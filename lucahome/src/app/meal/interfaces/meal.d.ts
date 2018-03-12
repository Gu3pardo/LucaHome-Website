import { Weekday } from "../enums/weekday.e";

export interface Meal {
  uuid: string;
  title: string;
  description: string;
  weekday: Weekday;
}
