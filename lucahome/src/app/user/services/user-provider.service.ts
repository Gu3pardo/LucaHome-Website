import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../interfaces/user';

@Injectable()
export class UserProviderService {

  private user$ = new BehaviorSubject<User>(null);

  constructor() { }

  get user() { return this.user$; }

  public SetUser(user: User): void {
    if (user) {
      this.user$.next(user);
    }
  }

  public SetUserIsValid(isValid: boolean): void {
    if (this.user$.value) {
      let user = this.user$.value;
      user.isValid = isValid;
      this.user$.next(user);
    }
  }
}
