import { Meal } from "../interfaces/meal";

export abstract class MealConverter {
  private static defaultMealList: Meal[] = [
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Monday"
    },
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Tuesday"
    },
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Wednesday"
    },
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Thursday"
    },
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Friday"
    },
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Saturday"
    },
    {
      uuid: "",
      title: "",
      description: "",
      weekday: "Sunday"
    }
  ];

  public static ConvertJson(json: JSON): Meal[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.hasOwnProperty("Error")) {
      return this.defaultMealList;
    }

    if (!json.hasOwnProperty("Data")) {
      return this.defaultMealList;
    }

    const category: string = json["Category"];
    const action: string = json["Action"];
    const success: boolean = json["Success"];
    const data = json["Data"];

    // TODO implement conversion
    return this.defaultMealList;
  }
}
