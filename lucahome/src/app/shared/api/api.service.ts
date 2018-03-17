import { Injectable } from "@angular/core"
import { Response, Http } from "@angular/http"
import { Observable } from "rxjs/Rx"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

  private mealListData$: BehaviorSubject<string> = new BehaviorSubject("");
  private editMealData$: BehaviorSubject<string> = new BehaviorSubject("");
  private securityData$: BehaviorSubject<string> = new BehaviorSubject("");
  private setCameraStateData$: BehaviorSubject<string> = new BehaviorSubject("");
  private shoppingListData$: BehaviorSubject<string> = new BehaviorSubject("");
  private editShoppingItemData$: BehaviorSubject<string> = new BehaviorSubject("");
  private temperatureData$: BehaviorSubject<string> = new BehaviorSubject("");
  private authentificateUserData$: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(
    private readonly http: Http,
    private readonly userProviderService: UserProviderService,
    private readonly dialogService: DialogService,
    private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
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
    if (!callback) {
      console.warn("ApiService: No callback provided!");
      this.toastService.DisplayError("No callback provided!");
      return;
    }

    if (data.length <= 0) {
      console.warn("ApiService: No data provided!");
      this.toastService.DisplayError("No data provided!");
      callback("{\"Error\":\"No data provided!\"}");
      return;
    }

    const user = this.userProviderService.user.value;
    if (!user) {
      console.error("ApiService: No user!");
      this.toastService.DisplayError("No user!");
      callback("{\"Error\":\"No user!\"}");
      return;
    }
    
    const handshakeUrl = "http://lucahome.fritz.box/api/lucahome/controller.php&action=Handshake";
    this.http.get(handshakeUrl).catch(error => {
      this.toastService.DisplayError("Handshake failed!");

      const errorJson = `{\"Error\":\"Handshake failed!\",\"Data\":\"${error.toString()}\",\"ClientAddress\":\"${handshakeUrl}\",\"Secret\":\"\"}`;
      callback(errorJson);

      const errorResponse: Response = {
        type: 3,
        ok: false,
        url: handshakeUrl,
        status: 666,
        statusText: "Error",
        bytesLoaded: 0,
        totalBytes: 0,
        headers: null,
        text: (): string => { return errorJson; },
        json: (): any => { return JSON.parse(errorJson); },
        arrayBuffer: (): ArrayBuffer => { return null; },
        blob: (): Blob => { return null; }
      };
      return Observable.of(errorResponse);

    }).take(1).subscribe(handshakeResult => {
      if (!handshakeResult) {
        this.toastService.DisplayError("Handshake failed!");
        callback("{\"Error\":\"Handshake failed!\"}");
        return;
      }

      let secret = this.parseSecret(handshakeResult.json());

      if (!secret) {
        this.toastService.DisplayError("No secret received!");
        callback("{\"Error\":\"No secret received!\"}");
        return;
      }

      const userData = `${user.name}::${user.passphrase}::${data}`;
      const encryptedUserData = Encrypt.Encrypt(userData, secret);
      const commandUrl = "http://" + `lucahome.fritz.box/api/lucahome/controller.php&action=${encryptedUserData}`;
      
      this.http.get(commandUrl).catch(error => {
        this.toastService.DisplayError("Command failed!");

        const errorJson = `{\"Error\":\"Command failed!\",\"Data\":\"${error.toString()}\"}`;
        callback(errorJson);

        const errorResponse: Response = {
          type: 3,
          ok: false,
          url: handshakeUrl,
          status: 666,
          statusText: "Error",
          bytesLoaded: 0,
          totalBytes: 0,
          headers: null,
          text: (): string => { return errorJson; },
          json: (): any => { return JSON.parse(errorJson); },
          arrayBuffer: (): ArrayBuffer => { return null; },
          blob: (): Blob => { return null; }
        };
        return Observable.of(errorResponse);

      }).take(1).subscribe(encryptedResult => {
        if (!encryptedResult) {
          this.toastService.DisplayError("No result provided!");
          callback("{\"Error\":\"No result provided!\"}");
          return;
        }

        const decryptedResult = Decrypt.Decrypt(encryptedResult.text(), secret);
        callback(decryptedResult);
      });
    });
  }

  private parseSecret(handshakeResult: JSON): string {
    const clientAddress: string = handshakeResult.hasOwnProperty("ClientAddress") ? handshakeResult["ClientAddress"] : "";
    const secret: string = handshakeResult.hasOwnProperty("Secret") ? handshakeResult["Secret"] : null;

    const jsonResult: Handshake = { clientAddress: clientAddress, secret: secret };

    if (jsonResult.secret) {
      return jsonResult.secret;
    }

    return null;
  }
}
