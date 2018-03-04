import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingItem } from './shopping-item';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class ShoppingService {

  public shoppingItemList = new BehaviorSubject<ShoppingItem[]>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) { }

  public GetShoppingItemList(): void {
    // TODO add command
    let response = this.apiService.SendCommand("GetShoppingItemList");
  }

  public AddShoppingItem(shoppingItem: ShoppingItem): void {
    // TODO add command
    let response = this.apiService.SendCommand(`AddShoppingItem: ${shoppingItem.toString()}`);
  }

  public UpdateShoppingItem(shoppingItem: ShoppingItem): void {
    // TODO add command
    let response = this.apiService.SendCommand(`UpdateShoppingItem: ${shoppingItem.toString()}`);
  }

  public DeleteShoppingItem(shoppingItem: ShoppingItem): void {
    // TODO add command
    let response = this.apiService.SendCommand(`DeleteShoppingItem: ${shoppingItem.toString()}`);
  }
}
