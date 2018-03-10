import { ShoppingItem } from "./shopping-item";
import { ShoppingItemType } from "./shopping-item-type.e";

export abstract class ShoppingConverter {
  private static defaultShoppingList: ShoppingItem[] = [];

  public static ConvertJson(json: JSON): ShoppingItem[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.hasOwnProperty("Error")) {
      throw json["Error"];
    }

    if (!json.hasOwnProperty("Data")) {
      throw "NoValidJson";
    }

    const category: string = json["Category"];
    const action: string = json["Action"];
    const success: boolean = json["Success"];
    const data = json["Data"];

    // TODO implement conversion
    return this.defaultShoppingList;
  }
}
