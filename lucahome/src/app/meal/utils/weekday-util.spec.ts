import { TestBed, inject } from '@angular/core/testing';
import { Meal } from "../interfaces/meal";
import { Weekday } from "../enums/weekday.e";
import { WeekdayUtil } from './weekday-util';

describe('WeekdayUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekdayUtil]
    });
  });

  it('should be created', inject([WeekdayUtil], (weekdayUtil: WeekdayUtil) => {
    expect(weekdayUtil).toBeTruthy();
  }));

  it('getEnumAsStringArray should return the expected array', () => {
    const actual = WeekdayUtil.getEnumAsStringArray();

    expect(actual.length).toBe(7);
    expect(actual[0]).toBe(Weekday.Sunday.valueOf());
    expect(actual[1]).toBe(Weekday.Monday.valueOf());
    expect(actual[2]).toBe(Weekday.Tuesday.valueOf());
    expect(actual[3]).toBe(Weekday.Wednesday.valueOf());
    expect(actual[4]).toBe(Weekday.Thursday.valueOf());
    expect(actual[5]).toBe(Weekday.Friday.valueOf());
    expect(actual[6]).toBe(Weekday.Saturday.valueOf());
  });

  it('getEntryByString should return the expected enum entry', () => {
    let actual = WeekdayUtil.getEntryByString(Weekday.Sunday.valueOf());
    expect(actual).toBe(Weekday.Sunday);

    actual = WeekdayUtil.getEntryByString(Weekday.Monday.valueOf());
    expect(actual).toBe(Weekday.Monday);

    actual = WeekdayUtil.getEntryByString(Weekday.Tuesday.valueOf());
    expect(actual).toBe(Weekday.Tuesday);

    actual = WeekdayUtil.getEntryByString(Weekday.Wednesday.valueOf());
    expect(actual).toBe(Weekday.Wednesday);

    actual = WeekdayUtil.getEntryByString(Weekday.Thursday.valueOf());
    expect(actual).toBe(Weekday.Thursday);

    actual = WeekdayUtil.getEntryByString(Weekday.Friday.valueOf());
    expect(actual).toBe(Weekday.Friday);

    actual = WeekdayUtil.getEntryByString(Weekday.Saturday.valueOf());
    expect(actual).toBe(Weekday.Saturday);
  });
});
