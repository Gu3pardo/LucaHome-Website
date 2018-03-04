import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { UserConverter } from './user-converter.c';
import { UserProviderService } from "./user-provider.service";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private userProviderService: UserProviderService) { }

  public AuthentificateUser(): void {
    // TODO add command
    let jsonResponse = this.apiService.AuthentificateUser("AuthentificateUser: TODO");
    if (jsonResponse) {
      let conversionResult;
      try {
        conversionResult = UserConverter.ConvertJson(jsonResponse.getValue());
      } catch (error) {
        console.log(error);
      }
      if (conversionResult) {
        this.userProviderService.SetUser(conversionResult);
      }
    }
  }
}
