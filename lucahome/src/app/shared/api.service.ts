import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Decrypt } from "../crypto/decrypt.c";
import { Encrypt } from "../crypto/encrypt.c";
import { User } from "../user/user";
import { UserProviderService } from "../user/user-provider.service";
import { DialogService } from "./dialog.service";
import { ToastService } from "./toast.service";
import { ILucaApiService } from "./api.service.i";

@Injectable()
export class ApiService implements ILucaApiService {

  private user: User;

  constructor(
    private http: HttpClient,
    private userProviderService: UserProviderService,
    private dialogService: DialogService,
    private toastService: ToastService) {
    this.userProviderService.user.subscribe(user => {
      this.user = user;
    });
  }

  public LoadMealListData(): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public UpdateMeal(data: string): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public LoadSecurityData(): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public SetCameraState(data: string): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public LoadShoppingListData(): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public AddShoppingItem(data: string): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public UpdateShoppingItem(data: string): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public DeleteShoppingItem(data: string): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public LoadTemperatureData(): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  public AuthentificateUser(data: string): BehaviorSubject<string> {
    return new BehaviorSubject<string>("TODO");
  }

  private sendCommand(command: string): string {
    if (!this.user) {
      this.toastService.DisplayError("No user!");
      // TODO open login dialog
      return "Error: No user!";
    }

    return command;
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
