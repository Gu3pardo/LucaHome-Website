import { TestBed, inject } from '@angular/core/testing';

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";
import { UserProviderService } from "./user-provider.service";

import { UserService } from './user.service';

describe('UserService', () => {
  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);
  let userProviderServiceMock = jasmine.createSpyObj<UserProviderService>("UserProviderService", Mock.userProviderServiceMock);

  beforeEach(() => {
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
});
