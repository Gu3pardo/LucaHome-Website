import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";

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
    service.AddShoppingItem({ uuid: "", name: "", type: 0, quantity: 0, unit: "" });
    expect(apiServiceMock.EditShoppingItem).toHaveBeenCalled();
  }));

  it('UpdateShoppingItem should call apiService.EditShoppingItem', inject([ShoppingService], (service: ShoppingService) => {
    service.UpdateShoppingItem({ uuid: "", name: "", type: 0, quantity: 0, unit: "" });
    expect(apiServiceMock.EditShoppingItem).toHaveBeenCalled();
  }));

  it('DeleteShoppingItem should call apiService.EditShoppingItem', inject([ShoppingService], (service: ShoppingService) => {
    service.DeleteShoppingItem({ uuid: "", name: "", type: 0, quantity: 0, unit: "" });
    expect(apiServiceMock.EditShoppingItem).toHaveBeenCalled();
  }));
});
