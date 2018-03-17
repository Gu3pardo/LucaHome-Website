import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingItem } from '../interfaces/shopping-item';
import { ShoppingConverter } from "../converter/shopping-converter.c";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";

@Injectable()
export class ShoppingService implements OnInit, OnDestroy {

  private shoppingItemList$ = new BehaviorSubject<ShoppingItem[]>(null);

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService) {
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
  }

  ngOnInit(): void {
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
    const uuid: string = shoppingItem.uuid;
    const name: string = shoppingItem.name;
    const type: string = shoppingItem.type;
    const quantity: number = shoppingItem.quantity;
    const unit: string = shoppingItem.unit;

    this.apiService.EditShoppingItem(`SHOPPINGITEM::ADD::${uuid}::${name}::${type}::${quantity}::${unit}`);
  }

  public UpdateShoppingItem(shoppingItem: ShoppingItem): void {
    const uuid: string = shoppingItem.uuid;
    const name: string = shoppingItem.name;
    const type: string = shoppingItem.type;
    const quantity: number = shoppingItem.quantity;
    const unit: string = shoppingItem.unit;

    this.apiService.EditShoppingItem(`SHOPPINGITEM::UPDATE::${uuid}::${name}::${type}::${quantity}::${unit}`);
  }

  public DeleteShoppingItem(shoppingItem: ShoppingItem): void {
    this.apiService.EditShoppingItem(`SHOPPINGITEM::DELETE::${shoppingItem.uuid}`);
  }
}
