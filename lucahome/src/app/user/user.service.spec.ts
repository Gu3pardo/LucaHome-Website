import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";
import { UserProviderService } from "./user-provider.service";

import { UserService } from './user.service';

describe('UserService', () => {
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);
  let userProviderServiceMock = jasmine.createSpyObj<UserProviderService>("UserProviderService", Mock.userProviderServiceMock);

  let apiServiceMock = {
    authentificateUserData: new BehaviorSubject(""),
    AuthentificateUser: () => { }
  };

  beforeEach(() => {
    spyOn(apiServiceMock, "AuthentificateUser");

    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: UserProviderService, useValue: userProviderServiceMock }
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('AuthentificateUser should call apiService.AuthentificateUser', inject([UserService], (service: UserService) => {
    service.AuthentificateUser();
    expect(apiServiceMock.AuthentificateUser).toHaveBeenCalled();
  }));
});
