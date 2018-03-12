import { Weekday } from "../enums/weekday.e";
import { WeekdayUtil } from "../utils/weekday-util";
import { Meal } from "../interfaces/meal";

export abstract class MealConverter {
  private static defaultMealList: Meal[] = [
    {
      uuid: "4C72B2E8-0040-4AB2-83CB-317ECB8ED206",
      title: "",
      description: "",
      weekday: Weekday.Sunday
    }
    ,
    {
      uuid: "5DE14ECF-FAC6-41E8-AF4E-F78FDC0CB49C",
      title: "",
      description: "",
      weekday: Weekday.Monday
    },
    {
      uuid: "A7B2E697-A0BC-42D9-9016-A12EA363F8F6",
      title: "",
      description: "",
      weekday: Weekday.Tuesday
    },
    {
      uuid: "0DED99B0-877D-4E71-A070-4A757F90C9D7",
      title: "",
      description: "",
      weekday: Weekday.Wednesday
    },
    {
      uuid: "FBF69CF8-FC12-49E1-962D-245148CDB67A",
      title: "",
      description: "",
      weekday: Weekday.Thursday
    },
    {
      uuid: "1AE61FC6-A449-4685-99AE-7DDAE8BA86F9",
      title: "",
      description: "",
      weekday: Weekday.Friday
    },
    {
      uuid: "5B3F6F42-2B9A-4A85-9CD7-09C952999188",
      title: "",
      description: "",
      weekday: Weekday.Saturday
    }
  ];

  public static ConvertJson(json: JSON): Meal[] {
    if (!json) {
      return this.defaultMealList;
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

    if (!success) {
      return this.defaultMealList;
    }

    const data: JSON[] = json["Data"];

    let mealList: Meal[] = [];

    for (let index = 0; index < 7; index++) {
      const entry: JSON = data[index];
      if (!entry) {
        mealList.push(this.defaultMealList[index]);
        continue;
      }

      const mealItemJson: JSON = entry["Meal"];
      if (!mealItemJson) {
        mealList.push(this.defaultMealList[index]);
        continue;
      }

      const uuid: string = mealItemJson.hasOwnProperty("Uuid")
        ? mealItemJson["Uuid"]
        : this.defaultMealList[index].uuid;

      const title: string = mealItemJson.hasOwnProperty("Title")
        ? mealItemJson["Title"]
        : "";

      const description: string = mealItemJson.hasOwnProperty("Description")
        ? mealItemJson["Description"]
        : "";

      const dateJson: JSON = mealItemJson["Date"];

      const weekday: Weekday = dateJson.hasOwnProperty("Weekday")
        ? WeekdayUtil.getEntryByString(dateJson["Weekday"])
        : WeekdayUtil.getEntryByString(WeekdayUtil.getEnumAsStringArray()[index]);

      const newMealItem: Meal = {
        uuid: uuid,
        title: title,
        description: description,
        weekday: weekday
      };
    }

    return mealList;
  }
}
