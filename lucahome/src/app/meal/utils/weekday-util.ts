import { Weekday } from "../enums/weekday.e";

export abstract class WeekdayUtil {
  static getEnumAsStringArray(): string[] {
    let enumArray: string[] = [];

    for (let key in Weekday) {
      enumArray.push(Weekday[key]);
    }

    return enumArray;
  }

  static getEntryByString(value: string): Weekday {
    for (let key in Weekday) {
      if (Weekday[key] === value) {
        return Weekday[Weekday[key]];
      }
    }

    return Weekday.Sunday;
  }

  static getIndexOfWeekday(value: Weekday): number {
    let index = 0;

    for (let key in Weekday) {
      if (Weekday[Weekday[key]] === value) {
        return index;
      }
      index++;
    }

    return 0;
  }
}
