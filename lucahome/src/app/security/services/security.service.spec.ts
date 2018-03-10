import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let apiServiceMock = {
    securityData: new BehaviorSubject(""),
    LoadSecurityData: () => { },
    SetCameraState: () => { }
  };

  beforeEach(() => {
    spyOn(apiServiceMock, "LoadSecurityData");
    spyOn(apiServiceMock, "SetCameraState");

    TestBed.configureTestingModule({
      providers: [
        SecurityService,
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ToastService, useValue: toastServiceMock }
      ]
    });
  });

  it('should be created', inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));

  it('LoadSecurity should call apiService.LoadSecurityData', inject([SecurityService], (service: SecurityService) => {
    service.LoadSecurity();
    expect(apiServiceMock.LoadSecurityData).toHaveBeenCalled();
  }));

  it('SetCameraState should call apiService.LoadSecurityData', inject([SecurityService], (service: SecurityService) => {
    service.SetCameraState(true);
    expect(apiServiceMock.SetCameraState).toHaveBeenCalled();
  }));
});
