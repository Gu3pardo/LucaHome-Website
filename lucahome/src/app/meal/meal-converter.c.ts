import { Meal } from "./meal";

export abstract class MealConverter {
  public static ConvertJson(json: string): Meal[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.indexOf("Error") >= 0) {
      throw json;
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
        weekday: "Wednesday"
      },
      {
        uuid: "UUID4",
        title: "Title4",
        description: "Description4",
        weekday: "Thursday"
      },
      {
        uuid: "UUID5",
        title: "Title5",
        description: "Description5",
        weekday: "Friday"
      },
      {
        uuid: "UUID6",
        title: "Title6",
        description: "Description6",
        weekday: "Saturday"
      },
      {
        uuid: "UUID7",
        title: "Title7",
        description: "Description7",
        weekday: "Sunday"
      }
    ];
  }
}
