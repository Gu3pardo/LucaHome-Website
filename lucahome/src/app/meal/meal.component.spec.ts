import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../mock";

import { DialogService } from "../shared/dialog.service";
import { Meal } from "./meal";
import { MealService } from "./meal.service";
import { MealComponent } from './meal.component';

describe('MealComponent', () => {
  let component: MealComponent;
  let fixture: ComponentFixture<MealComponent>;

  let dialogServiceMock = jasmine.createSpyObj<DialogService>("DialogService", Mock.dialogServiceMock);

  let mealMonday: Meal = {
    uuid: "UUID1",
    title: "Title1",
    description: "Description1",
    weekday: "Monday"
  };
  let mealTuesday: Meal = {
    uuid: "UUID2",
    title: "Title2",
    description: "Description2",
    weekday: "Tuesday"
  };
  let mealListResult: Meal[] = [mealMonday, mealTuesday];
  let mealServiceMock = {
    mealList: new BehaviorSubject(mealListResult)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MealComponent
      ],
      providers: [
        { provide: DialogService, useValue: dialogServiceMock },
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
});
