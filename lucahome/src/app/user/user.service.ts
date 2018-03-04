import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { UserConverter } from './user-converter.c';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class UserService {

  public user = new BehaviorSubject<User>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) { }

  public SetCurrentUser(user: User): void {
    if (user) {
      this.user.next(user);
    }
  }

  public AuthentificateUser(): void {
    // TODO add command
    let response = this.apiService.SendCommand(`AuthentificateUser: ${this.user.getValue().toString()}`);
    if (response) {
      let user = UserConverter.ConvertJson(response);
      if (user) {
        this.user.next(user);
      }
    }
  }
}
