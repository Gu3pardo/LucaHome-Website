import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DialogService } from "../dialog/dialog.service";
import { ToastService } from "../toast/toast.service";

import { Decrypt } from "../../crypto/decrypt/decrypt.c";
import { Encrypt } from "../../crypto/encrypt/encrypt.c";
import { Handshake } from "../../crypto/interfaces/handshake";

import { User } from "../../user/interfaces/user";
import { UserProviderService } from "../../user/services/user-provider.service";

import { ILucaApiService } from "./api.service.i";

@Injectable()
export class ApiService implements ILucaApiService {

  private user: User;

  private mealListData$: BehaviorSubject<string> = new BehaviorSubject("");
  private editMealData$: BehaviorSubject<string> = new BehaviorSubject("");
  private securityData$: BehaviorSubject<string> = new BehaviorSubject("");
  private setCameraStateData$: BehaviorSubject<string> = new BehaviorSubject("");
  private shoppingListData$: BehaviorSubject<string> = new BehaviorSubject("");
  private editShoppingItemData$: BehaviorSubject<string> = new BehaviorSubject("");
  private temperatureData$: BehaviorSubject<string> = new BehaviorSubject("");
  private authentificateUserData$: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(
    private readonly http: HttpClient,
    private readonly userProviderService: UserProviderService,
    private readonly dialogService: DialogService,
    private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
    this.userProviderService.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userProviderService.user.unsubscribe();
  }

  get mealListData(): BehaviorSubject<string> { return this.mealListData$; }
  get editMealData(): BehaviorSubject<string> { return this.editMealData$; }
  get securityData(): BehaviorSubject<string> { return this.securityData$; }
  get setCameraStateData(): BehaviorSubject<string> { return this.setCameraStateData$; }
  get shoppingListData(): BehaviorSubject<string> { return this.shoppingListData$; }
  get editShoppingItemData(): BehaviorSubject<string> { return this.editShoppingItemData$; }
  get temperatureData(): BehaviorSubject<string> { return this.temperatureData$; }
  get authentificateUserData(): BehaviorSubject<string> { return this.authentificateUserData$; }

  public LoadMealListData(): void {
    this.sendCommand(
      "MEAL::GET::ALL",
      (result: string): void => {
        this.mealListData$.next(result);
      });
  }

  public EditMeal(data: string): void {
    this.sendCommand(
      data,
      (result: string): void => {
        this.editMealData$.next(result);
      });
  }

  public LoadSecurityData(): void {
    this.sendCommand(
      "SECURITY::GET::MOTION",
      (result: string): void => {
        this.securityData$.next(result);
      });
  }

  public SetCameraState(data: string): void {
    this.sendCommand(
      data,
      (result: string): void => {
        this.setCameraStateData$.next(result);
      });
  }

  public LoadShoppingListData(): void {
    this.sendCommand(
      "SHOPPINGITEM::GET::ALL",
      (result: string): void => {
        this.shoppingListData$.next(result);
      });
  }

  public EditShoppingItem(data: string): void {
    this.sendCommand(
      data,
      (result: string): void => {
        this.editShoppingItemData$.next(result);
      });
  }

  public LoadTemperatureData(): void {
    this.sendCommand(
      "TEMPERATURE::GET::ALL",
      (result: string): void => {
        this.temperatureData$.next(result);
      });
  }

  public AuthentificateUser(): void {
    this.sendCommand(
      "USER::VALIDATE::NOW",
      (result: string): void => {
        this.authentificateUserData$.next(result);
      });
  }

  private sendCommand(data: string, callback: (result: string) => any): void {
    // TODO remove console
    console.log("ApiService: Data: " + data);

    if (!callback) {
      this.toastService.DisplayError("No callback provided!");
      return;
    }

    if (data.length <= 0) {
      this.toastService.DisplayError("No data provided!");
      callback("{\"Error\":\"No data provided!\"}");
      return;
    }

    if (!this.user) {
      this.toastService.DisplayError("No user!");
      // TODO open login dialog
      callback("{\"Error\":\"No user!\"}");
      return;
    }

    // First perform handshake to receive secret
    const handshakeUrl = "http://lucahome.fritz.box/api/lucahome/controller.php&action=Handshake";
    this.http.get<string>(handshakeUrl).subscribe(handshakeResult => {
      if (handshakeResult) {
        let secret = this.parseSecret(handshakeResult);

        if (!secret) {
          this.toastService.DisplayError("No secret received!");
          callback("{\"Error\":\"No secret received!\"}");
          return;
        }

        const userData = `${this.user.name}::${this.user.passphrase}::${data}`;
        const encryptedUserData = Encrypt.Encrypt(userData, secret);
        const commandUrl = "http://" + `lucahome.fritz.box/api/lucahome/controller.php&action=${encryptedUserData}`;

        this.http.get<string>(commandUrl).subscribe(encryptedResult => {
          if (encryptedResult) {
            const decryptedResult = Decrypt.Decrypt(encryptedResult, secret);
            callback(decryptedResult);
            return;
          }

          this.toastService.DisplayError("Command failed!");
          callback("{\"Error\":\"Command failed!\"}");
          return;
        });
      }

      this.toastService.DisplayError("Handshake failed!");
      callback("{\"Error\":\"Handshake failed!\"}");
    });
  }

  private parseSecret(handshakeResult: string): string {
    const jsonResult: Handshake = JSON.parse(handshakeResult);
    if (jsonResult.secret) {
      return jsonResult.secret;
    }
    return null;
  }
}

/*
Communication contains a handshake to share the key

1. Call:
  Handshake to say hello and receive the key

  1.1 Error:
    Return error to caller
  1.2 Success:
    Encrypt command with key using Encrypt.encrypt(command, key)

2. Call:
  Send encrypted command

  2.1 Error:
    Return error to caller
  2.2 Success:
    Decrypt response with key using Decrypt.decrypt(message, key)

*/
