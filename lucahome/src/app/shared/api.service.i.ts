import { OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface ILucaApiService extends OnInit, OnDestroy {
  LoadMealListData(): void;
  EditMeal(data: string): void;
  LoadSecurityData(): void;
  SetCameraState(data: string): void;
  LoadShoppingListData(): void;
  EditShoppingItem(data: string): void;
  LoadTemperatureData(): void;
  AuthentificateUser(): void;
}
