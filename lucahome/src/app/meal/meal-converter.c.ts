import { Meal } from "./meal";

export abstract class MealConverter {
  public static ConvertJson(json: string): Meal[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    // TODO implement conversion
    return [
      {
        uuid: "UUID1",
        title: "Title1",
        description: "Description1",
        weekday: "Monday"
      },
      {
        uuid: "UUID2",
        title: "Title2",
        description: "Description2",
        weekday: "Tuesday"
      },
      {
        uuid: "UUID3",
        title: "Title3",
        description: "Description3",
        weekday: "Sunday"
      }
    ];
  }
}
