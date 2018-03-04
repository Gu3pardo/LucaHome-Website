import { ShoppingItem } from "./shopping-item";
import { ShoppingItemType } from "./shopping-item-type.e";

export abstract class ShoppingConverter {
  public static ConvertJson(json: string): ShoppingItem[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    // TODO implement conversion
    return [];
  }
}
