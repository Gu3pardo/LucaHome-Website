import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable()
export class UserProviderService {

  public user$ = new BehaviorSubject<User>(null);

  constructor() { }

  get user() { return this.user$; }

  public SetUser(user: User) {
    if (user) {
      this.user$.next(user);
    }
  }
}
