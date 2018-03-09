import { ShoppingItem } from "./shopping-item";
import { ShoppingItemType } from "./shopping-item-type.e";

export abstract class ShoppingConverter {
  public static ConvertJson(json: string): ShoppingItem[] {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.indexOf("Error") >= 0) {
      throw json;
    }

    // TODO implement conversion
    return [
      { uuid: "UUID1", name: "Name1", type: 0, quantity: 1, unit: "Unit1" },
      { uuid: "UUID2", name: "Name2", type: 0, quantity: 2, unit: "Unit2" },
      { uuid: "UUID3", name: "Name3", type: 0, quantity: 3, unit: "Unit3" }
    ];
  }
}
