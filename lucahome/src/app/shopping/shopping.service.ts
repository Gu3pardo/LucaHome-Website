import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingItem } from './shopping-item';
import { ShoppingConverter } from "./shopping-converter.c";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class ShoppingService implements OnInit, OnDestroy {

  private shoppingItemList$ = new BehaviorSubject<ShoppingItem[]>(null);

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
    this.apiService.shoppingListData.subscribe(data => {
      if (data) {
        let conversionResult;
        try {
          conversionResult = ShoppingConverter.ConvertJson(JSON.parse(data));
        } catch (error) {
          this.toastService.DisplayError(error.toString());
        }
        if (conversionResult) {
          this.shoppingItemList$.next(conversionResult);
        }
      }
    });

    this.apiService.editShoppingItemData.subscribe(editData => {
      if (editData) {
        if (editData.indexOf("SUCCESS") >= 0) {
          this.LoadShoppingItemList();
        } else {
          this.toastService.DisplayError("Edit of ShoppingItem failed with error: " + editData);
        }
      }
    });

    this.LoadShoppingItemList();
  }

  ngOnDestroy(): void {
    this.apiService.shoppingListData.unsubscribe();
    this.apiService.editShoppingItemData.unsubscribe();
  }

  get shoppingItemList() { return this.shoppingItemList$; }

  public LoadShoppingItemList(): void {
    this.apiService.LoadShoppingListData();
  }

  public AddShoppingItem(shoppingItem: ShoppingItem): void {
    // TODO add proper command
    this.apiService.EditShoppingItem(`AddShoppingItem: ${shoppingItem.toString()}`);
  }

  public UpdateShoppingItem(shoppingItem: ShoppingItem): void {
    // TODO add proper command
    this.apiService.EditShoppingItem(`UpdateShoppingItem: ${shoppingItem.toString()}`);
  }

  public DeleteShoppingItem(shoppingItem: ShoppingItem): void {
    // TODO add proper command
    this.apiService.EditShoppingItem(`DeleteShoppingItem: ${shoppingItem.toString()}`);
  }
}
