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
    this.apiService.authentificateUserData.subscribe(data => {
      if (data) {
        try {
          const isValid = UserConverter.ConvertJson(JSON.parse(data));
          this.userProviderService.SetUserIsValid(isValid);
        } catch (error) {
          this.toastService.DisplayError(error.toString());
          this.userProviderService.SetUserIsValid(false);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.apiService.authentificateUserData.unsubscribe();
  }

  public AuthentificateUser(): void {
    this.apiService.AuthentificateUser();
  }
}
