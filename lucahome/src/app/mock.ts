export abstract class Mock {
  static apiServiceMock = [
    "LoadMealListData",
    "EditMeal",
    "LoadSecurityData",
    "SetCameraState",
    "LoadShoppingListData",
    "EditShoppingItem",
    "LoadTemperatureData",
    "AuthentificateUser"
  ];

  static dialogServiceMock = [
    "openDialog"
  ];

  static toastServiceMock = [
    "DisplayError",
    "DisplaySuccess"
  ];

  static mealServiceMock = [
    "LoadMealList",
    "UpdateMeal"
  ];

  static securityServiceMock = [
    "security",
    "GetSecurity",
    "SetCameraState"
  ];

  static shoppingServiceMock = [
    "LoadShoppingItemList",
    "AddShoppingItem",
    "UpdateShoppingItem",
    "DeleteShoppingItem"
  ];

  static temperatureServiceMock = [
    "LoadTemperature"
  ];

  static userProviderServiceMock = [
    "SetUser"
  ];

  static userServiceMock = [
    "AuthentificateUser"
  ];
}
