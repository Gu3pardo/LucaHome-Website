export abstract class Mock {
  static apiServiceMock = [
    "LoadMealListData", "UpdateMeal",
    "LoadSecurityData", "SetCameraState",
    "LoadShoppingListData", "AddShoppingItem", "UpdateShoppingItem", "DeleteShoppingItem",
    "LoadTemperatureData",
    "AuthentificateUser"];

  static dialogServiceMock = ["ShowDialog"];

  static toastServiceMock = ["DisplayError", "DisplaySuccess"];

  static mealServiceMock = ["LoadMealList", "UpdateMeal"];

  static securityServiceMock = ["GetSecurity", "SetCameraState"];

  static temperatureServiceMock = ["LoadTemperature"];

  static userProviderServiceMock = ["SetUser"];

  static userServiceMock = ["AuthentificateUser"];
}
