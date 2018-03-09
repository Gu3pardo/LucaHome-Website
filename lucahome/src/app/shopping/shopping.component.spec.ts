import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { DialogService } from "../shared/dialog.service";
import { ToastService } from "../shared/toast.service";
import { ShoppingService } from "./shopping.service";

import { ShoppingItem } from "./shopping-item";
import { ShoppingComponent } from './shopping.component';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let dialogServiceMock = jasmine.createSpyObj<DialogService>("DialogService", Mock.dialogServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let shoppingListResult: ShoppingItem[] = [
    { uuid: "UUID1", name: "Name1", type: 0, quantity: 1, unit: "Unit1" },
    { uuid: "UUID2", name: "Name2", type: 0, quantity: 2, unit: "Unit2" }
  ];
  let shoppingServiceMock = {
    shoppingItemList: new BehaviorSubject(shoppingListResult),
    LoadShoppingItemList: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoppingComponent
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: DialogService, useValue: dialogServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: ShoppingService, useValue: shoppingServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addShoppingItem should call dialogService.openDialog', () => {
    component.addShoppingItem();

    expect(dialogServiceMock.openDialog).toHaveBeenCalled();
  });

  it('updateShoppingItem should call dialogService.openDialog', () => {
    component.updateShoppingItem();

    expect(dialogServiceMock.openDialog).toHaveBeenCalled();
  });

  it('deleteShoppingItem should call dialogService.openDialog', () => {
    component.deleteShoppingItem();

    expect(dialogServiceMock.openDialog).toHaveBeenCalled();
  });
});
