import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface ILucaApiService {
  LoadMealListData(): BehaviorSubject<string>;
  UpdateMeal(data: string): BehaviorSubject<string>;

  LoadSecurityData(): BehaviorSubject<string>;
  SetCameraState(data: string): BehaviorSubject<string>;

  LoadShoppingListData(): BehaviorSubject<string>;
  AddShoppingItem(data: string): BehaviorSubject<string>;
  UpdateShoppingItem(data: string): BehaviorSubject<string>;
  DeleteShoppingItem(data: string): BehaviorSubject<string>;

  LoadTemperatureData(): BehaviorSubject<string>;

  AuthentificateUser(data: string): BehaviorSubject<string>;
}
