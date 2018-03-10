export abstract class Mock {
  static apiServiceMock = [
    "mealListData",
    "editMealData",
    "securityData",
    "setCameraStateData",
    "shoppingListData",
    "editShoppingItemData",
    "temperatureData",
    "authentificateUserData",
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
    "openDialog",
    "closeDialog"
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
