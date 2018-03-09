import { TestBed, inject } from '@angular/core/testing';

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  beforeEach(() => {
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
