import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { DialogService } from "../../shared/dialog/dialog.service";
import { ToastService } from "../../shared/toast/toast.service";
import { MealService } from "../services/meal.service";
import { EnumToArrayPipe } from "../../shared/pipes/enum-to-array-pipe.p"

import { Meal } from "../interfaces/meal";
import { MealComponent } from './meal.component';
import { Weekday } from '../enums/weekday.e';

describe('MealComponent', () => {
  let component: MealComponent;
  let fixture: ComponentFixture<MealComponent>;

  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let dialogServiceMock = jasmine.createSpyObj<DialogService>("DialogService", Mock.dialogServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let mealMonday: Meal = {
    uuid: "UUID1",
    title: "Title1",
    description: "Description1",
    weekday: Weekday.Monday,
    day: 12,
    month: 2,
    year: 2018,
    shoppingItemUuidList: []
  };
  let mealTuesday: Meal = {
    uuid: "UUID2",
    title: "Title2",
    description: "Description2",
    weekday: Weekday.Tuesday,
    day: 13,
    month: 2,
    year: 2018,
    shoppingItemUuidList: []
  };
  let mealListResult: Meal[] = [mealMonday, mealTuesday];
  let mealServiceMock = {
    mealList: new BehaviorSubject(mealListResult),
    LoadMealList: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnumToArrayPipe,
        MealComponent
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: DialogService, useValue: dialogServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: MealService, useValue: mealServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectWeekday Tuesday should select mealTuesday', () => {
    component.mealList = mealListResult;
    component.selectedMeal = mealMonday;

    component.selectWeekday("Tuesday");

    expect(component.selectedMeal.weekday).toBe(mealTuesday.weekday);
    expect(component.selectedMeal.description).toBe(mealTuesday.description);
    expect(component.selectedMeal.title).toBe(mealTuesday.title);
    expect(component.selectedMeal.uuid).toBe(mealTuesday.uuid);
  });

  it('editTitle should call dialogService.openDialog', () => {
    component.editTitle();

    expect(dialogServiceMock.openDialog).toHaveBeenCalled();
  });

  it('editDescription should call dialogService.openDialog', () => {
    component.editDescription();

    expect(dialogServiceMock.openDialog).toHaveBeenCalled();
  });
});
