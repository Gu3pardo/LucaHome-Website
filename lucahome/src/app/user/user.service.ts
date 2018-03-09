import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { UserConverter } from './user-converter.c';
import { UserProviderService } from "./user-provider.service";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class UserService implements OnInit, OnDestroy {

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService,
    private readonly userProviderService: UserProviderService) {
  }

  ngOnInit(): void {
    this.apiService.authentificateUserData.subscribe(data => {
      if (data) {
        let conversionResult;
        try {
          conversionResult = UserConverter.ConvertJson(JSON.parse(data));
        } catch (error) {
          this.toastService.DisplayError(error.toString());
        }
        if (conversionResult) {
          this.userProviderService.SetUser(conversionResult);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.apiService.authentificateUserData.unsubscribe();
  }

  public AuthentificateUser(): void {
    this.apiService.AuthentificateUser("AuthentificateUser: TODO");
  }
}
