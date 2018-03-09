import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Decrypt } from "../crypto/decrypt.c";
import { Encrypt } from "../crypto/encrypt.c";
import { Handshake } from "../crypto/handshake";
import { User } from "../user/user";
import { UserProviderService } from "../user/user-provider.service";
import { DialogService } from "./dialog.service";
import { ToastService } from "./toast.service";
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

  get mealListData() { return this.mealListData$; }
  get editMealData() { return this.editMealData$; }

  get securityData() { return this.securityData$; }
  get setCameraStateData() { return this.setCameraStateData$; }

  get shoppingListData() { return this.shoppingListData$; }
  get editShoppingItemData() { return this.editShoppingItemData$; }

  get temperatureData() { return this.temperatureData$; }

  get authentificateUserData() { return this.authentificateUserData$; }

  public LoadMealListData(): void {
    this.sendCommand("MEAL::GET::ALL", this.mealListData$);
  }

  public EditMeal(data: string): void {
    this.sendCommand(data, this.editMealData$);
  }

  public LoadSecurityData(): void {
    this.sendCommand("SECURITY::GET::MOTION", this.securityData$);
  }

  public SetCameraState(data: string): void {
    this.sendCommand(data, this.setCameraStateData$);
  }

  public LoadShoppingListData(): void {
    this.sendCommand("SHOPPINGITEM::GET::ALL", this.shoppingListData$);
  }

  public EditShoppingItem(data: string): void {
    this.sendCommand(data, this.editShoppingItemData$);
  }

  public LoadTemperatureData(): void {
    this.sendCommand("TEMPERATURE::GET::ALL", this.temperatureData$);
  }

  public AuthentificateUser(data: string): void {
    this.sendCommand(data, this.authentificateUserData$);
  }

  private sendCommand(data: string, behaviorSubject: BehaviorSubject<string>): void {
    // TODO remove console
    console.log("ApiService: Data: " + data);

    if (data.length <= 0) {
      this.toastService.DisplayError("No data provided!");
      behaviorSubject.next("Error: No data provided!");
      return;
    }

    if (!behaviorSubject) {
      this.toastService.DisplayError("No behaviorSubject provided!");
      return;
    }

    if (!this.user) {
      this.toastService.DisplayError("No user!");
      // TODO open login dialog
      behaviorSubject.next("Error: No user!");
      return;
    }

    // First perform handshake to receive secret
    const handshakeUrl = "http://lucahome.fritz.box/api/lucahome/controller.php&action=Handshake";
    this.http.get<string>(handshakeUrl).subscribe(handshakeResult => {
      if (handshakeResult) {
        let secret = this.parseSecret(handshakeResult);

        if (!secret) {
          this.toastService.DisplayError("No secret received!");
          behaviorSubject.next("Error: No secret received!");
          return;
        }

        const userData = `${this.user.name}::${this.user.passphrase}::${data}`;
        const encryptedUserData = Encrypt.Encrypt(userData, secret);
        const commandUrl = "http://" + `lucahome.fritz.box/api/lucahome/controller.php&action=${encryptedUserData}`;

        this.http.get<string>(commandUrl).subscribe(encryptedResult => {
          if (encryptedResult) {
            const decryptedResult = Decrypt.Decrypt(encryptedResult, secret);
            behaviorSubject.next(decryptedResult);
            return;
          }

          this.toastService.DisplayError("Command failed!");
          behaviorSubject.next("Error: Command failed!");
          return;
        });
      }

      this.toastService.DisplayError("Handshake failed!");
      behaviorSubject.next("Error: Handshake failed!");
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
