import { Meal } from "./meal";

export abstract class MealConverter {
  public static ConvertJson(json: string): Meal[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    // TODO implement conversion
    return [];
  }
}
