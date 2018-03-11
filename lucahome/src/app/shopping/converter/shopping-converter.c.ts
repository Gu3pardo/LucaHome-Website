import { ShoppingItem } from "../interfaces/shopping-item";
import { ShoppingItemType } from "../enums/shopping-item-type.e";

export abstract class ShoppingConverter {
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

    if (!success) {
      throw "NoSuccessJson";
    }

    const data: JSON[] = json["Data"];

    let shoppingList: ShoppingItem[] = [];

    for (const entry of data) {
      const shoppingItemJson: JSON = entry["ShoppingItem"];
      if (!shoppingItemJson) {
        throw "NoValidJsonProperty";
      }

      const uuid: string = shoppingItemJson.hasOwnProperty("Uuid") ? shoppingItemJson["Uuid"] : "";
      const name: string = shoppingItemJson.hasOwnProperty("Name") ? shoppingItemJson["Name"] : "";
      const typeString: string = shoppingItemJson.hasOwnProperty("Type") ? shoppingItemJson["Type"] : "Other";
      const quantity: number = shoppingItemJson.hasOwnProperty("Quantity") ? shoppingItemJson["Quantity"] : -1;
      const unit: string = shoppingItemJson.hasOwnProperty("Unit") ? shoppingItemJson["Unit"] : "e";

      const type: ShoppingItemType = ShoppingItemType[typeString];

      const newShoppingItem: ShoppingItem = {
        uuid: uuid,
        name: name,
        type: type,
        quantity: quantity,
        unit: unit
      };

      shoppingList.push(newShoppingItem);
    }
    
    return shoppingList;
  }
}
