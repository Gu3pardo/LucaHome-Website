import { Component, OnInit } from '@angular/core';
import { DialogService } from "../../shared/dialog/dialog.service";
import { ShoppingItem } from "../interfaces/shopping-item";
import { ShoppingService } from "../services/shopping.service";

@Component({
  selector: 'lucahome-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  shoppingItemList: ShoppingItem[];

  constructor(
    private readonly dialogService: DialogService,
    private readonly shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.shoppingItemList.subscribe(shoppingItemList => {
      if (shoppingItemList) {
        this.shoppingItemList = shoppingItemList;
      }
    });

    this.shoppingService.LoadShoppingItemList();
  }

  public addShoppingItem(): void {
    console.log("Pressed addShoppingItem");
    this.dialogService.openDialog(undefined);
  }

  public updateShoppingItem(): void {
    console.log("Pressed updateShoppingItem");
    this.dialogService.openDialog(undefined);
  }

  public deleteShoppingItem(): void {
    console.log("Pressed deleteShoppingItem");
    this.dialogService.openDialog(undefined);
  }
}
