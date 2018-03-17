import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";
import { ShoppingItemType } from "../enums/shopping-item-type.e";

import { ShoppingService } from '../services/shopping.service';

describe('ShoppingService', () => {
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let apiServiceMock = {
    shoppingListData: new BehaviorSubject(""),
    editShoppingItemData: new BehaviorSubject(""),
    LoadShoppingListData: () => { },
    EditShoppingItem: () => { }
  };

  beforeEach(() => {
    spyOn(apiServiceMock, "LoadShoppingListData");
    spyOn(apiServiceMock, "EditShoppingItem");

    TestBed.configureTestingModule({
      providers: [
        ShoppingService,
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ToastService, useValue: toastServiceMock }
      ]
    });
  });

  it('should be created', inject([ShoppingService], (service: ShoppingService) => {
    expect(service).toBeTruthy();
  }));

  it('LoadShoppingItemList should call apiService.LoadShoppingListData', inject([ShoppingService], (service: ShoppingService) => {
    service.LoadShoppingItemList();
    expect(apiServiceMock.LoadShoppingListData).toHaveBeenCalled();
  }));

  it('AddShoppingItem should call apiService.EditShoppingItem', inject([ShoppingService], (service: ShoppingService) => {
    service.AddShoppingItem({ uuid: "Uuid1", name: "Name1", type: ShoppingItemType.Other, quantity: 2, unit: "litre" });
    expect(apiServiceMock.EditShoppingItem).toHaveBeenCalledWith("SHOPPINGITEM::ADD::Uuid1::Name1::Other::2::litre");
  }));

  it('UpdateShoppingItem should call apiService.EditShoppingItem', inject([ShoppingService], (service: ShoppingService) => {
    service.UpdateShoppingItem({ uuid: "UUID2", name: "NAME2", type: ShoppingItemType.Other, quantity: 450, unit: "gr" });
    expect(apiServiceMock.EditShoppingItem).toHaveBeenCalledWith("SHOPPINGITEM::UPDATE::UUID2::NAME2::Other::450::gr");
  }));

  it('DeleteShoppingItem should call apiService.EditShoppingItem', inject([ShoppingService], (service: ShoppingService) => {
    service.DeleteShoppingItem({ uuid: "uuid_3", name: "name_3", type: ShoppingItemType.Other, quantity: 4, unit: "packages" });
    expect(apiServiceMock.EditShoppingItem).toHaveBeenCalledWith("SHOPPINGITEM::DELETE::uuid_3");
  }));
});
