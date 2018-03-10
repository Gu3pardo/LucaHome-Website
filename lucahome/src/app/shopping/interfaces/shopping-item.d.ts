import { ShoppingItemType } from "../enums/shopping-item-type.e";

export interface ShoppingItem {
  uuid: string;
  name: string;
  type: ShoppingItemType;
  quantity: number;
  unit: string;
}
