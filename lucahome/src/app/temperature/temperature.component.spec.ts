import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../mock";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";
import { TemperatureService } from "./temperature.service";
import { environment } from "../../environments/environment";

import { Temperature } from "./temperature";
import { TemperatureType } from "./temperature-type.e";
import { TemperatureComponent } from './temperature.component';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let environmentMock = {
    production: false,
    securityUrl: "securityUrl",
    temperatureUrl: "temperatureUrl"
  };

  let temperatureResult: Temperature = {
    uuid: "Uuid1",
    roomUuid: "RoomUuid1",
    value: 19.3,
    date: new Date(),
    temperatureType: TemperatureType.RaspberryPi,
    sensorPath: "SensorPath",
    graphPath: "GraphPath"
  };
  let temperatureServiceMock = {
    temperature: new BehaviorSubject(temperatureResult),
    LoadTemperature: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TemperatureComponent
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ToastService, useValue: toastServiceMock },
        { provide: TemperatureService, useValue: temperatureServiceMock },
        { provide: environment, useValue: environmentMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
