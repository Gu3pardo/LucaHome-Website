import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingItem } from './shopping-item';
import { ShoppingConverter } from "./shopping-converter.c";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class ShoppingService {

  public shoppingItemList$ = new BehaviorSubject<ShoppingItem[]>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) {
    this.LoadShoppingItemList();
  }

  get shoppingItemList() { return this.shoppingItemList$; }

  public LoadShoppingItemList(): void {
    let jsonResponse = this.apiService.LoadShoppingListData();
    if (jsonResponse) {
      let conversionResult;
      try {
        conversionResult = ShoppingConverter.ConvertJson(jsonResponse.getValue());
      } catch (error) {
        console.log(error);
      }
      if (conversionResult) {
        this.shoppingItemList$.next(conversionResult);
      }
    }
  }

  public AddShoppingItem(shoppingItem: ShoppingItem): void {
    let response = this.apiService.AddShoppingItem(`AddShoppingItem: ${shoppingItem.toString()}`);
    // TODO add proper response
  }

  public UpdateShoppingItem(shoppingItem: ShoppingItem): void {
    let response = this.apiService.UpdateShoppingItem(`UpdateShoppingItem: ${shoppingItem.toString()}`);
    // TODO add proper response
  }

  public DeleteShoppingItem(shoppingItem: ShoppingItem): void {
    let response = this.apiService.DeleteShoppingItem(`DeleteShoppingItem: ${shoppingItem.toString()}`);
    // TODO add proper response
  }
}
