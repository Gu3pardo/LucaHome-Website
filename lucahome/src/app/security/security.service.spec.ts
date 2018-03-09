import { TestBed, inject } from '@angular/core/testing';

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  beforeEach(() => {
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
