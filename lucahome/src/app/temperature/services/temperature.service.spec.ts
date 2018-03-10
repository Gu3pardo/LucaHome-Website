import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { ToastService } from "../../shared/toast/toast.service";

import { TemperatureService } from '../services/temperature.service';

describe('TemperatureService', () => {
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let apiServiceMock = {
    temperatureData: new BehaviorSubject(""),
    LoadTemperatureData: () => { }
  };

  beforeEach(() => {
    spyOn(apiServiceMock, "LoadTemperatureData");

    TestBed.configureTestingModule({
      providers: [
        TemperatureService,
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ToastService, useValue: toastServiceMock }
      ]
    });
  });

  it('should be created', inject([TemperatureService], (service: TemperatureService) => {
    expect(service).toBeTruthy();
  }));

  it('LoadTemperature should call apiService.LoadTemperatureData', inject([TemperatureService], (service: TemperatureService) => {
    service.LoadTemperature();
    expect(apiServiceMock.LoadTemperatureData).toHaveBeenCalled();
  }));
});
